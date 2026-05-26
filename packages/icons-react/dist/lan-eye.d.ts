import React from 'react';

export interface LanEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEye: React.FC<LanEyeProps>;
export default LanEye;
