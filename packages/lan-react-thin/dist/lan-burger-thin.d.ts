import React from 'react';

export interface LanBurgerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerThin(props: LanBurgerThinProps): React.ReactElement;
export default LanBurgerThin;
