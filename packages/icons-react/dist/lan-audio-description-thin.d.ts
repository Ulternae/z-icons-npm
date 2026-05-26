import React from 'react';

export interface LanAudioDescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAudioDescriptionThin: React.FC<LanAudioDescriptionThinProps>;
export default LanAudioDescriptionThin;
