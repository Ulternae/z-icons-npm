import React from 'react';

export interface LanHeptagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeptagonThin(props: LanHeptagonThinProps): React.ReactElement;
export default LanHeptagonThin;
