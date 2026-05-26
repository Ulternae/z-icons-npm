import React from 'react';

export interface LanChimneyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChimneyRegular: React.FC<LanChimneyRegularProps>;
export default LanChimneyRegular;
