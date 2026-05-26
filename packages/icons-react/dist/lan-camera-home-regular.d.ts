import React from 'react';

export interface LanCameraHomeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraHomeRegular: React.FC<LanCameraHomeRegularProps>;
export default LanCameraHomeRegular;
