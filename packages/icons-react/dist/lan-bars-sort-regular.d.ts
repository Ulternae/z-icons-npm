import React from 'react';

export interface LanBarsSortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsSortRegular: React.FC<LanBarsSortRegularProps>;
export default LanBarsSortRegular;
