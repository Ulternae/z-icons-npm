import React from 'react';

export interface LanMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneSlash: React.FC<LanMicrophoneSlashProps>;
export default LanMicrophoneSlash;
