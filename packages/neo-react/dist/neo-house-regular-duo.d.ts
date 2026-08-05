import React from 'react';

export interface NeoHouseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHouseRegularDuo(props: NeoHouseRegularDuoProps): React.ReactElement;
export default NeoHouseRegularDuo;
