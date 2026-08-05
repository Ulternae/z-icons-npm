import React from 'react';

export interface CoreGearRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGearRegularDuo(props: CoreGearRegularDuoProps): React.ReactElement;
export default CoreGearRegularDuo;
