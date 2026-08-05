import React from 'react';

export interface LanCartShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartShoppingThin(props: LanCartShoppingThinProps): React.ReactElement;
export default LanCartShoppingThin;
