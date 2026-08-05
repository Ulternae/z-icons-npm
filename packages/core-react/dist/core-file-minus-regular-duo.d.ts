import React from 'react';

export interface CoreFileMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileMinusRegularDuo(props: CoreFileMinusRegularDuoProps): React.ReactElement;
export default CoreFileMinusRegularDuo;
