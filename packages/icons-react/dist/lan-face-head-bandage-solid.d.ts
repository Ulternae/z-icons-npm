import React from 'react';

export interface LanFaceHeadBandageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHeadBandageSolid: React.FC<LanFaceHeadBandageSolidProps>;
export default LanFaceHeadBandageSolid;
