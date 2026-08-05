import React from 'react';

export interface LanHandPointDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointDownThin(props: LanHandPointDownThinProps): React.ReactElement;
export default LanHandPointDownThin;
