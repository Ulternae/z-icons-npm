import React from 'react';

export interface LanCoffeeBeanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeanRegular(props: LanCoffeeBeanRegularProps): React.ReactElement;
export default LanCoffeeBeanRegular;
