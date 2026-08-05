import React from 'react';

export interface LanBurgerFriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerFriesThin(props: LanBurgerFriesThinProps): React.ReactElement;
export default LanBurgerFriesThin;
