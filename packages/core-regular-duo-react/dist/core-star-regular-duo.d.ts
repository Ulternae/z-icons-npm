import React from 'react';

export interface CoreStarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStarRegularDuo(props: CoreStarRegularDuoProps): React.ReactElement;
export default CoreStarRegularDuo;
