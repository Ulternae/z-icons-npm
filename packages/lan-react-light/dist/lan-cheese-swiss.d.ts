import React from 'react';

export interface LanCheeseSwissProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseSwiss(props: LanCheeseSwissProps): React.ReactElement;
export default LanCheeseSwiss;
