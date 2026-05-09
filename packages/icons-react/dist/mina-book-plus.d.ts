import React from 'react';

export interface MinaBookPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookPlus: React.FC<MinaBookPlusProps>;
export default MinaBookPlus;
