import React from 'react';

export interface LanTreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrees: React.FC<LanTreesProps>;
export default LanTrees;
