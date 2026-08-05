import React from 'react';

export interface LanBackwardFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardFastThin(props: LanBackwardFastThinProps): React.ReactElement;
export default LanBackwardFastThin;
