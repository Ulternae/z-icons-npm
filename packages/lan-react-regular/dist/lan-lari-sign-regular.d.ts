import React from 'react';

export interface LanLariSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLariSignRegular(props: LanLariSignRegularProps): React.ReactElement;
export default LanLariSignRegular;
