import React from 'react';

export interface LanSwatchbookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwatchbookRegular: React.FC<LanSwatchbookRegularProps>;
export default LanSwatchbookRegular;
