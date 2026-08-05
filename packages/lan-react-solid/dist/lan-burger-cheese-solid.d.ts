import React from 'react';

export interface LanBurgerCheeseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerCheeseSolid(props: LanBurgerCheeseSolidProps): React.ReactElement;
export default LanBurgerCheeseSolid;
