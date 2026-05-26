import React from 'react';

export interface LanTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTree: React.FC<LanTreeProps>;
export default LanTree;
