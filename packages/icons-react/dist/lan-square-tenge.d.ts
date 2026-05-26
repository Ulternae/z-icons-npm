import React from 'react';

export interface LanSquareTengeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTenge: React.FC<LanSquareTengeProps>;
export default LanSquareTenge;
