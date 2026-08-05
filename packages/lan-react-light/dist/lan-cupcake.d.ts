import React from 'react';

export interface LanCupcakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupcake(props: LanCupcakeProps): React.ReactElement;
export default LanCupcake;
