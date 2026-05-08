import React from 'react';

export interface MinaPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPencil: React.FC<MinaPencilProps>;
export default MinaPencil;
