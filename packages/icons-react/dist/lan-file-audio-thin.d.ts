import React from 'react';

export interface LanFileAudioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAudioThin: React.FC<LanFileAudioThinProps>;
export default LanFileAudioThin;
