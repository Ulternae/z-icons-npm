import React from 'react';

export interface LanFaceHeadBandageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHeadBandage: React.FC<LanFaceHeadBandageProps>;
export default LanFaceHeadBandage;
