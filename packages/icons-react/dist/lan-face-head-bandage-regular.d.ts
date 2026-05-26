import React from 'react';

export interface LanFaceHeadBandageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHeadBandageRegular: React.FC<LanFaceHeadBandageRegularProps>;
export default LanFaceHeadBandageRegular;
