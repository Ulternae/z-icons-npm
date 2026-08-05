import React from 'react';

export interface LanGrid2PlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2PlusThin(props: LanGrid2PlusThinProps): React.ReactElement;
export default LanGrid2PlusThin;
