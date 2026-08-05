import React from 'react';

export interface LanBurgerFriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerFries(props: LanBurgerFriesProps): React.ReactElement;
export default LanBurgerFries;
