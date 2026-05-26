import React from 'react';

export interface LanSportsballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSportsballRegular: React.FC<LanSportsballRegularProps>;
export default LanSportsballRegular;
