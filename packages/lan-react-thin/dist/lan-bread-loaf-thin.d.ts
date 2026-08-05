import React from 'react';

export interface LanBreadLoafThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadLoafThin(props: LanBreadLoafThinProps): React.ReactElement;
export default LanBreadLoafThin;
