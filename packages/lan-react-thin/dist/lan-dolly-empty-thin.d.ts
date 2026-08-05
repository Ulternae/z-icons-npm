import React from 'react';

export interface LanDollyEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyEmptyThin(props: LanDollyEmptyThinProps): React.ReactElement;
export default LanDollyEmptyThin;
