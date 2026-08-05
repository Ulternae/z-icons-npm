import React from 'react';

export interface NeoTruckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTruckRegularDuo(props: NeoTruckRegularDuoProps): React.ReactElement;
export default NeoTruckRegularDuo;
