import React from 'react';

export interface LanCornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornRegular(props: LanCornRegularProps): React.ReactElement;
export default LanCornRegular;
