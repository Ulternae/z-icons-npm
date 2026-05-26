import React from 'react';

export interface LanSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakerSolid: React.FC<LanSpeakerSolidProps>;
export default LanSpeakerSolid;
