import React from 'react';

export interface CoreTruckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTruckRegularDuo(props: CoreTruckRegularDuoProps): React.ReactElement;
export default CoreTruckRegularDuo;
