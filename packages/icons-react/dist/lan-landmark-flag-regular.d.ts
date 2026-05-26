import React from 'react';

export interface LanLandmarkFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkFlagRegular: React.FC<LanLandmarkFlagRegularProps>;
export default LanLandmarkFlagRegular;
