import React from 'react';

export interface CorePlayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlayRegularDuo(props: CorePlayRegularDuoProps): React.ReactElement;
export default CorePlayRegularDuo;
