import React from 'react';

export interface LanBurgerSodaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerSodaRegular(props: LanBurgerSodaRegularProps): React.ReactElement;
export default LanBurgerSodaRegular;
