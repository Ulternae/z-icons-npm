import React from 'react';

export interface LanUserBeardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserBeardThin(props: LanUserBeardThinProps): React.ReactElement;
export default LanUserBeardThin;
