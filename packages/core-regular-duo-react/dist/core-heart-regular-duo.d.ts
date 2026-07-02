import React from 'react';

export interface CoreHeartRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeartRegularDuo(props: CoreHeartRegularDuoProps): React.ReactElement;
export default CoreHeartRegularDuo;
