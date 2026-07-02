import React from 'react';

export interface CoreCompassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompassRegularDuo(props: CoreCompassRegularDuoProps): React.ReactElement;
export default CoreCompassRegularDuo;
