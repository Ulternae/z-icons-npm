import React from 'react';

export interface LanCoffeeBeansSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeansSolid(props: LanCoffeeBeansSolidProps): React.ReactElement;
export default LanCoffeeBeansSolid;
