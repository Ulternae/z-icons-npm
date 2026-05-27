import React from 'react';

export interface NeoPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPencil: React.FC<NeoPencilProps>;
export default NeoPencil;
