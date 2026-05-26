import React from 'react';

export interface LanCameraRotateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRotateRegular: React.FC<LanCameraRotateRegularProps>;
export default LanCameraRotateRegular;
