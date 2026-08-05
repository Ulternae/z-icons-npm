import React from 'react';

export interface LanDialMinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMinThin(props: LanDialMinThinProps): React.ReactElement;
export default LanDialMinThin;
