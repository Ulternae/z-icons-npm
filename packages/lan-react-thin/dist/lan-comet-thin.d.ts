import React from 'react';

export interface LanCometThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCometThin(props: LanCometThinProps): React.ReactElement;
export default LanCometThin;
