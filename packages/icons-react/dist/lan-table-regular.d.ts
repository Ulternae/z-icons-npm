import React from 'react';

export interface LanTableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableRegular: React.FC<LanTableRegularProps>;
export default LanTableRegular;
