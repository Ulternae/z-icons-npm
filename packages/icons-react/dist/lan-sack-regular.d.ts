import React from 'react';

export interface LanSackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackRegular: React.FC<LanSackRegularProps>;
export default LanSackRegular;
