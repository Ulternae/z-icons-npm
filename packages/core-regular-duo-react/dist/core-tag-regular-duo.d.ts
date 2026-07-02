import React from 'react';

export interface CoreTagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTagRegularDuo(props: CoreTagRegularDuoProps): React.ReactElement;
export default CoreTagRegularDuo;
