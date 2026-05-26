import React from 'react';

export interface LanEmptySetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEmptySetRegular: React.FC<LanEmptySetRegularProps>;
export default LanEmptySetRegular;
