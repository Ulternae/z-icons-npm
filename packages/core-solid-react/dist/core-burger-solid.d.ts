import React from 'react';

export interface CoreBurgerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBurgerSolid(props: CoreBurgerSolidProps): React.ReactElement;
export default CoreBurgerSolid;
