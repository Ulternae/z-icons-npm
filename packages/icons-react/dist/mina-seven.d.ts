import React from 'react';

export interface MinaSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSeven: React.FC<MinaSevenProps>;
export default MinaSeven;
