import React from 'react';

export interface CoreShipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShipRegularDuo: React.FC<CoreShipRegularDuoProps>;
export default CoreShipRegularDuo;
