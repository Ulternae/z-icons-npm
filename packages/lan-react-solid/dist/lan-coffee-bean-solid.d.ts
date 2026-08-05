import React from 'react';

export interface LanCoffeeBeanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeanSolid(props: LanCoffeeBeanSolidProps): React.ReactElement;
export default LanCoffeeBeanSolid;
