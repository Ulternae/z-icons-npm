import React from 'react';

export interface LanCheeseSwissThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseSwissThin(props: LanCheeseSwissThinProps): React.ReactElement;
export default LanCheeseSwissThin;
