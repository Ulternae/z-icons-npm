import React from 'react';

export interface CoreGlobeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGlobeRegularDuo(props: CoreGlobeRegularDuoProps): React.ReactElement;
export default CoreGlobeRegularDuo;
