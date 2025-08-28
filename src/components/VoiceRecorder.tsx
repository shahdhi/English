import React, { useState, useRef } from 'react';
import { Mic, Square, Play, Pause } from 'lucide-react';

interface VoiceRecorderProps {
  timeLimit: number;
  onRecordingComplete: (audioBlob: Blob | null) => void;
}

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ timeLimit, onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setRecordedAudio(url);
        onRecordingComplete(blob);
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopRecording();
            return timeLimit;
          }
          return prev - 1;
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        setTimeLeft(timeLimit);
      }
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio || !recordedAudio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="text-center">
        {!isRecording && !recordedAudio && (
          <button
            onClick={startRecording}
            className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200 mx-auto mb-4"
          >
            <Mic className="w-6 h-6" />
          </button>
        )}
        
        {isRecording && (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mx-auto animate-pulse">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="text-lg font-medium text-gray-900">
              Recording... {formatTime(timeLeft)}
            </div>
            <button
              onClick={stopRecording}
              className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 mx-auto"
            >
              <Square className="w-4 h-4 mr-2" />
              Stop Recording
            </button>
          </div>
        )}
        
        {recordedAudio && (
          <div className="space-y-4">
            <audio ref={audioRef} src={recordedAudio} onEnded={() => setIsPlaying(false)} />
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={togglePlayback}
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
              </button>
              <button
                onClick={() => {
                  setRecordedAudio(null);
                  onRecordingComplete(null);
                  setTimeLeft(timeLimit);
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Record Again
              </button>
            </div>
            <p className="text-sm text-green-600 font-medium">Recording completed successfully!</p>
          </div>
        )}
        
        {!isRecording && !recordedAudio && (
          <p className="text-gray-600">Click the microphone to start recording</p>
        )}
      </div>
    </div>
  );
};