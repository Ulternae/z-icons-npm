import React from 'react';

export interface LanUserPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPenThin(props: LanUserPenThinProps): React.ReactElement;
export default LanUserPenThin;
