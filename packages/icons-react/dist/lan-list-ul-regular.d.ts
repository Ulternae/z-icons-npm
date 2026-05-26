import React from 'react';

export interface LanListUlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListUlRegular: React.FC<LanListUlRegularProps>;
export default LanListUlRegular;
