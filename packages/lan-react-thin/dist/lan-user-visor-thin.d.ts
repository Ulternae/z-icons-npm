import React from 'react';

export interface LanUserVisorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVisorThin(props: LanUserVisorThinProps): React.ReactElement;
export default LanUserVisorThin;
