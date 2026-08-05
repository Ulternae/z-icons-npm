import React from 'react';

export interface LanEmptySetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEmptySetThin(props: LanEmptySetThinProps): React.ReactElement;
export default LanEmptySetThin;
