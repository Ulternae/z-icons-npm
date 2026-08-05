import React from 'react';

export interface LanHomeUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeUserThin(props: LanHomeUserThinProps): React.ReactElement;
export default LanHomeUserThin;
