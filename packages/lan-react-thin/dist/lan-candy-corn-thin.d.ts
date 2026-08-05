import React from 'react';

export interface LanCandyCornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCornThin(props: LanCandyCornThinProps): React.ReactElement;
export default LanCandyCornThin;
