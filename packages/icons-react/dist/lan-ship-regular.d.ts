import React from 'react';

export interface LanShipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipRegular: React.FC<LanShipRegularProps>;
export default LanShipRegular;
