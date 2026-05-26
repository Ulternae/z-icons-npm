import React from 'react';

export interface LanAudioDescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAudioDescriptionSolid: React.FC<LanAudioDescriptionSolidProps>;
export default LanAudioDescriptionSolid;
