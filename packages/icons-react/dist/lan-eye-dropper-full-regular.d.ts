import React from 'react';

export interface LanEyeDropperFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperFullRegular: React.FC<LanEyeDropperFullRegularProps>;
export default LanEyeDropperFullRegular;
