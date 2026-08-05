import React from 'react';

export interface LanCodeForkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeForkThin(props: LanCodeForkThinProps): React.ReactElement;
export default LanCodeForkThin;
