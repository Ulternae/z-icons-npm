import React from 'react';

export interface LanSplitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplit: React.FC<LanSplitProps>;
export default LanSplit;
