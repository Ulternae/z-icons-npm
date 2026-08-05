import React from 'react';

export interface LanDropletPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPlusThin(props: LanDropletPlusThinProps): React.ReactElement;
export default LanDropletPlusThin;
