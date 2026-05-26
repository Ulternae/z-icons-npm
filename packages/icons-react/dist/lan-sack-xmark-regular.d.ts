import React from 'react';

export interface LanSackXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackXmarkRegular: React.FC<LanSackXmarkRegularProps>;
export default LanSackXmarkRegular;
