import React from 'react';

export interface LanFaceKissBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissBeam: React.FC<LanFaceKissBeamProps>;
export default LanFaceKissBeam;
