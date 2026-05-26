import React from 'react';

export interface LanSwordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordRegular: React.FC<LanSwordRegularProps>;
export default LanSwordRegular;
