import React from 'react';

export interface MinaMicrophoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMicrophoneSlash: React.FC<MinaMicrophoneSlashProps>;
export default MinaMicrophoneSlash;
