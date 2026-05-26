import React from 'react';

export interface LanSquareTugrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTugrik: React.FC<LanSquareTugrikProps>;
export default LanSquareTugrik;
