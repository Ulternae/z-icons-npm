import React from 'react';

export interface LanBurgerGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerGlassRegular(props: LanBurgerGlassRegularProps): React.ReactElement;
export default LanBurgerGlassRegular;
