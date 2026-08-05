import React from 'react';

export interface LanCowbellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellThin(props: LanCowbellThinProps): React.ReactElement;
export default LanCowbellThin;
