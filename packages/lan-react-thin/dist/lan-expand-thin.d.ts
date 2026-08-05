import React from 'react';

export interface LanExpandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandThin(props: LanExpandThinProps): React.ReactElement;
export default LanExpandThin;
