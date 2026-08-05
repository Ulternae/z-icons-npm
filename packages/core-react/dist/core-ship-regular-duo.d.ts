import React from 'react';

export interface CoreShipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShipRegularDuo(props: CoreShipRegularDuoProps): React.ReactElement;
export default CoreShipRegularDuo;
