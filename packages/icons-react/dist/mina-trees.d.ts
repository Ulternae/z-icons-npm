import React from 'react';

export interface MinaTreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrees: React.FC<MinaTreesProps>;
export default MinaTrees;
