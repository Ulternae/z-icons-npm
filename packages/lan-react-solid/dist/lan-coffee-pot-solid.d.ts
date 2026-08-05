import React from 'react';

export interface LanCoffeePotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeePotSolid(props: LanCoffeePotSolidProps): React.ReactElement;
export default LanCoffeePotSolid;
