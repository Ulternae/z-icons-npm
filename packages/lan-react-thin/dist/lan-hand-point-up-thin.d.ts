import React from 'react';

export interface LanHandPointUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointUpThin(props: LanHandPointUpThinProps): React.ReactElement;
export default LanHandPointUpThin;
