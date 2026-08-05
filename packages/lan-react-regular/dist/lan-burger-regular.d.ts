import React from 'react';

export interface LanBurgerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerRegular(props: LanBurgerRegularProps): React.ReactElement;
export default LanBurgerRegular;
