import React from 'react';

export interface LanSleighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSleigh(props: LanSleighProps): React.ReactElement;
export default LanSleigh;
