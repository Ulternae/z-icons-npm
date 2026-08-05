import React from 'react';

export interface LanBurgerFriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerFriesRegular(props: LanBurgerFriesRegularProps): React.ReactElement;
export default LanBurgerFriesRegular;
