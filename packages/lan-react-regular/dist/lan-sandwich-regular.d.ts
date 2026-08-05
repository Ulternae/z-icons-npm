import React from 'react';

export interface LanSandwichRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSandwichRegular(props: LanSandwichRegularProps): React.ReactElement;
export default LanSandwichRegular;
