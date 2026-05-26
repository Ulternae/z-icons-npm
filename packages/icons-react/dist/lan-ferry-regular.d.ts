import React from 'react';

export interface LanFerryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerryRegular: React.FC<LanFerryRegularProps>;
export default LanFerryRegular;
