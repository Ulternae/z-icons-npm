import React from 'react';

export interface LanChalkboardUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChalkboardUserThin(props: LanChalkboardUserThinProps): React.ReactElement;
export default LanChalkboardUserThin;
