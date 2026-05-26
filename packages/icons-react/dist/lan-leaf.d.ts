import React from 'react';

export interface LanLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeaf: React.FC<LanLeafProps>;
export default LanLeaf;
