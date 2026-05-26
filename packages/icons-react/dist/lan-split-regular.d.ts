import React from 'react';

export interface LanSplitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplitRegular: React.FC<LanSplitRegularProps>;
export default LanSplitRegular;
