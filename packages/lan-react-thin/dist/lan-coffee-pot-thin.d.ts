import React from 'react';

export interface LanCoffeePotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeePotThin(props: LanCoffeePotThinProps): React.ReactElement;
export default LanCoffeePotThin;
