import React from 'react';

export interface LanDolphinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDolphinThin(props: LanDolphinThinProps): React.ReactElement;
export default LanDolphinThin;
