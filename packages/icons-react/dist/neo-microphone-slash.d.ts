import React from 'react';

export interface NeoMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMicrophoneSlash: React.FC<NeoMicrophoneSlashProps>;
export default NeoMicrophoneSlash;
