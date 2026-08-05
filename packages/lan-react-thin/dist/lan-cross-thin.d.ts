import React from 'react';

export interface LanCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrossThin(props: LanCrossThinProps): React.ReactElement;
export default LanCrossThin;
