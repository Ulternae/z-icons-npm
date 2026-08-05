import React from 'react';

export interface LanBurgerSodaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerSodaSolid(props: LanBurgerSodaSolidProps): React.ReactElement;
export default LanBurgerSodaSolid;
