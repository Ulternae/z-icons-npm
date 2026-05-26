import React from 'react';

export interface LanFileAudioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAudio: React.FC<LanFileAudioProps>;
export default LanFileAudio;
