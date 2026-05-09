import React from 'react';

export interface MinaEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEye: React.FC<MinaEyeProps>;
export default MinaEye;
