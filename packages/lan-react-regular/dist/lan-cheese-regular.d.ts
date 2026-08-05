import React from 'react';

export interface LanCheeseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseRegular(props: LanCheeseRegularProps): React.ReactElement;
export default LanCheeseRegular;
