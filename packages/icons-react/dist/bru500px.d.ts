import React from 'react';

export interface Bru500pxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Bru500px: React.FC<Bru500pxProps>;
export default Bru500px;
