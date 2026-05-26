import React from 'react';

export interface LanLandmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkRegular: React.FC<LanLandmarkRegularProps>;
export default LanLandmarkRegular;
