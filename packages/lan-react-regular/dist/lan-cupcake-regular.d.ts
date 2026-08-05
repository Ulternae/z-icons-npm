import React from 'react';

export interface LanCupcakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupcakeRegular(props: LanCupcakeRegularProps): React.ReactElement;
export default LanCupcakeRegular;
