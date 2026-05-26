import React from 'react';

export interface LanLandmarkAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkAltRegular: React.FC<LanLandmarkAltRegularProps>;
export default LanLandmarkAltRegular;
