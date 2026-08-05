import React from 'react';

export interface LanBurgerGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerGlassThin(props: LanBurgerGlassThinProps): React.ReactElement;
export default LanBurgerGlassThin;
