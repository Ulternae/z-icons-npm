import React from 'react';

export interface CoreGaugeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeRegularDuo(props: CoreGaugeRegularDuoProps): React.ReactElement;
export default CoreGaugeRegularDuo;
