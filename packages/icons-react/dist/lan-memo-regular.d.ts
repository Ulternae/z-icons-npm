import React from 'react';

export interface LanMemoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoRegular: React.FC<LanMemoRegularProps>;
export default LanMemoRegular;
