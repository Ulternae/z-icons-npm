import React from 'react';

export interface LanMessageSmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageSmsThin(props: LanMessageSmsThinProps): React.ReactElement;
export default LanMessageSmsThin;
