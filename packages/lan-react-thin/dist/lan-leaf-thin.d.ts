import React from 'react';

export interface LanLeafThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafThin(props: LanLeafThinProps): React.ReactElement;
export default LanLeafThin;
