import React from 'react';

export interface LanPlugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugThin(props: LanPlugThinProps): React.ReactElement;
export default LanPlugThin;
