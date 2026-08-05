import React from 'react';

export interface LanCediSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCediSignRegular(props: LanCediSignRegularProps): React.ReactElement;
export default LanCediSignRegular;
