import React from 'react';

export interface CoreBurgerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBurgerRegularDuo(props: CoreBurgerRegularDuoProps): React.ReactElement;
export default CoreBurgerRegularDuo;
