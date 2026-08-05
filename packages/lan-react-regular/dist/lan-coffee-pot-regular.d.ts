import React from 'react';

export interface LanCoffeePotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeePotRegular(props: LanCoffeePotRegularProps): React.ReactElement;
export default LanCoffeePotRegular;
