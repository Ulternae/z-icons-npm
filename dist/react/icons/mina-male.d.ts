import React from 'react';

export interface MinaMaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMale: React.FC<MinaMaleProps>;
export default MinaMale;
