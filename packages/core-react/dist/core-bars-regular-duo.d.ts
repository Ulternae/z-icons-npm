import React from 'react';

export interface CoreBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBarsRegularDuo(props: CoreBarsRegularDuoProps): React.ReactElement;
export default CoreBarsRegularDuo;
