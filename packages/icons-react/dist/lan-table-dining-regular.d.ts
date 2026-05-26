import React from 'react';

export interface LanTableDiningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableDiningRegular: React.FC<LanTableDiningRegularProps>;
export default LanTableDiningRegular;
