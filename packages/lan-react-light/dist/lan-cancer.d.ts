import React from 'react';

export interface LanCancerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCancer(props: LanCancerProps): React.ReactElement;
export default LanCancer;
