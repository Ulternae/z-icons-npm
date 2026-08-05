import React from 'react';

export interface LanAngleDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleDownThin(props: LanAngleDownThinProps): React.ReactElement;
export default LanAngleDownThin;
