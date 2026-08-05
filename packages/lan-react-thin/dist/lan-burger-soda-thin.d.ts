import React from 'react';

export interface LanBurgerSodaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerSodaThin(props: LanBurgerSodaThinProps): React.ReactElement;
export default LanBurgerSodaThin;
