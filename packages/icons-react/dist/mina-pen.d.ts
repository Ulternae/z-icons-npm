import React from 'react';

export interface MinaPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPen: React.FC<MinaPenProps>;
export default MinaPen;
