import React from 'react';

export interface LanCoffeePotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeePot(props: LanCoffeePotProps): React.ReactElement;
export default LanCoffeePot;
