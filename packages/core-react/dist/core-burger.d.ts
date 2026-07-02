import React from 'react';

export interface CoreBurgerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBurger(props: CoreBurgerProps): React.ReactElement;
export default CoreBurger;
