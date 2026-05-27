import React from 'react';

export interface CoreMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrophone: React.FC<CoreMicrophoneProps>;
export default CoreMicrophone;
