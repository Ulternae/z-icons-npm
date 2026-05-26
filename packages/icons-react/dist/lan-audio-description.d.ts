import React from 'react';

export interface LanAudioDescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAudioDescription: React.FC<LanAudioDescriptionProps>;
export default LanAudioDescription;
