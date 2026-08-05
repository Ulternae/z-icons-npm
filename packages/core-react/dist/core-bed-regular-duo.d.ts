import React from 'react';

export interface CoreBedRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBedRegularDuo(props: CoreBedRegularDuoProps): React.ReactElement;
export default CoreBedRegularDuo;
