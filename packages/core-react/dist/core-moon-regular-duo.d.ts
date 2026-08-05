import React from 'react';

export interface CoreMoonRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoonRegularDuo(props: CoreMoonRegularDuoProps): React.ReactElement;
export default CoreMoonRegularDuo;
