import React from 'react';

export interface LanCancerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCancerRegular(props: LanCancerRegularProps): React.ReactElement;
export default LanCancerRegular;
