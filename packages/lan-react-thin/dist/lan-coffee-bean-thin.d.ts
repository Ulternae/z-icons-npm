import React from 'react';

export interface LanCoffeeBeanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeanThin(props: LanCoffeeBeanThinProps): React.ReactElement;
export default LanCoffeeBeanThin;
