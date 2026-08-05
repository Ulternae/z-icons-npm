import React from 'react';

export interface LanBurgerSodaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerSoda(props: LanBurgerSodaProps): React.ReactElement;
export default LanBurgerSoda;
