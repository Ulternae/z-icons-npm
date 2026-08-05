import React from 'react';

export interface LanBurgerLettuceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerLettuce(props: LanBurgerLettuceProps): React.ReactElement;
export default LanBurgerLettuce;
