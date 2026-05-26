import React from 'react';

export interface LanCameraAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraAltRegular: React.FC<LanCameraAltRegularProps>;
export default LanCameraAltRegular;
