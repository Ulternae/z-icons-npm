import React from 'react';

export interface LanCameraRetroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRetroRegular: React.FC<LanCameraRetroRegularProps>;
export default LanCameraRetroRegular;
