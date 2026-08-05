import React from 'react';

export interface LanCancerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCancerThin(props: LanCancerThinProps): React.ReactElement;
export default LanCancerThin;
