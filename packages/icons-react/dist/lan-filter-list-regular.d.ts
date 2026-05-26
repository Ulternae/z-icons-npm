import React from 'react';

export interface LanFilterListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterListRegular: React.FC<LanFilterListRegularProps>;
export default LanFilterListRegular;
