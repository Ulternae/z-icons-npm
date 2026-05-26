import React from 'react';

export interface LanFilterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterRegular: React.FC<LanFilterRegularProps>;
export default LanFilterRegular;
