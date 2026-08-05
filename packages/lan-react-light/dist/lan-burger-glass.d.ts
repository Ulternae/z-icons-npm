import React from 'react';

export interface LanBurgerGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerGlass(props: LanBurgerGlassProps): React.ReactElement;
export default LanBurgerGlass;
