import React from 'react';

export interface LanSandwichProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSandwich(props: LanSandwichProps): React.ReactElement;
export default LanSandwich;
