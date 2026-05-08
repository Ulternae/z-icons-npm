import React from 'react';

export interface MinaTentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTent: React.FC<MinaTentProps>;
export default MinaTent;
