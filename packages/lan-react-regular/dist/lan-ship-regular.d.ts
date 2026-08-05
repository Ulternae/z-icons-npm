import React from 'react';

export interface LanShipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipRegular(props: LanShipRegularProps): React.ReactElement;
export default LanShipRegular;
