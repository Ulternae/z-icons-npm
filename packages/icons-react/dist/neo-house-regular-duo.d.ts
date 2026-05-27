import React from 'react';

export interface NeoHouseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHouseRegularDuo: React.FC<NeoHouseRegularDuoProps>;
export default NeoHouseRegularDuo;
