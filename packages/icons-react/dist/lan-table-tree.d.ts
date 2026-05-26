import React from 'react';

export interface LanTableTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableTree: React.FC<LanTableTreeProps>;
export default LanTableTree;
