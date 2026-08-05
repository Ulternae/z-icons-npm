import React from 'react';

export interface LanMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMThin(props: LanMThinProps): React.ReactElement;
export default LanMThin;
