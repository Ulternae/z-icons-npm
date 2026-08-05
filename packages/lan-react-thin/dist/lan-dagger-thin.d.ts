import React from 'react';

export interface LanDaggerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDaggerThin(props: LanDaggerThinProps): React.ReactElement;
export default LanDaggerThin;
