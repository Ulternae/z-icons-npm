import React from 'react';

export interface LanSandwichThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSandwichThin(props: LanSandwichThinProps): React.ReactElement;
export default LanSandwichThin;
