import React from 'react';

export interface MinaTentTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTentTree: React.FC<MinaTentTreeProps>;
export default MinaTentTree;
