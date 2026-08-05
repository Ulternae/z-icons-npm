import React from 'react';

export interface CoreSunRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSunRegularDuo(props: CoreSunRegularDuoProps): React.ReactElement;
export default CoreSunRegularDuo;
