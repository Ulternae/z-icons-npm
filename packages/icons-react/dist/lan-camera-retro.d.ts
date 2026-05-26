import React from 'react';

export interface LanCameraRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRetro: React.FC<LanCameraRetroProps>;
export default LanCameraRetro;
