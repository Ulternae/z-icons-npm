import React from 'react';

export interface LanSpeakersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpeakersSolid: React.FC<LanSpeakersSolidProps>;
export default LanSpeakersSolid;
