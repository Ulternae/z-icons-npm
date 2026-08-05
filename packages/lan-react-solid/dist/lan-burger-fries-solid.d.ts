import React from 'react';

export interface LanBurgerFriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerFriesSolid(props: LanBurgerFriesSolidProps): React.ReactElement;
export default LanBurgerFriesSolid;
