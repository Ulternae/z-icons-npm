import React from 'react';

export interface LanSquareBrazilianRealProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBrazilianReal: React.FC<LanSquareBrazilianRealProps>;
export default LanSquareBrazilianReal;
