import React from 'react';

export interface LanCoffeeBeansThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeansThin(props: LanCoffeeBeansThinProps): React.ReactElement;
export default LanCoffeeBeansThin;
