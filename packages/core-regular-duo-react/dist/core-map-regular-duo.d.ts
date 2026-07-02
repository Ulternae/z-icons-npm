import React from 'react';

export interface CoreMapRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMapRegularDuo(props: CoreMapRegularDuoProps): React.ReactElement;
export default CoreMapRegularDuo;
