import React from 'react';

export interface LanCheeseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheese(props: LanCheeseProps): React.ReactElement;
export default LanCheese;
