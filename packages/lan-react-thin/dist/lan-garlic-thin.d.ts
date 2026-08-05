import React from 'react';

export interface LanGarlicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarlicThin(props: LanGarlicThinProps): React.ReactElement;
export default LanGarlicThin;
