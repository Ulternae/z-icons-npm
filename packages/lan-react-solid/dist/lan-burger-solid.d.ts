import React from 'react';

export interface LanBurgerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerSolid(props: LanBurgerSolidProps): React.ReactElement;
export default LanBurgerSolid;
