import React from 'react';

export interface LanBarsSortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsSortThin(props: LanBarsSortThinProps): React.ReactElement;
export default LanBarsSortThin;
