import React from 'react';

export interface LanSackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSack: React.FC<LanSackProps>;
export default LanSack;
