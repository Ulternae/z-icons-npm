import React from 'react';

export interface LanUserSithThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserSithThin(props: LanUserSithThinProps): React.ReactElement;
export default LanUserSithThin;
