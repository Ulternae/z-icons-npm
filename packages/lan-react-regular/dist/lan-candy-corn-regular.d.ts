import React from 'react';

export interface LanCandyCornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCornRegular(props: LanCandyCornRegularProps): React.ReactElement;
export default LanCandyCornRegular;
