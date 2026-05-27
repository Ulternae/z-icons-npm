import React from 'react';

export interface CoreMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrophoneSlash: React.FC<CoreMicrophoneSlashProps>;
export default CoreMicrophoneSlash;
