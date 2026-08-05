import React from 'react';

export interface LanOtterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOtterThin(props: LanOtterThinProps): React.ReactElement;
export default LanOtterThin;
