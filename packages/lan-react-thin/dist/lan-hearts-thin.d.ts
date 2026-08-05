import React from 'react';

export interface LanHeartsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartsThin(props: LanHeartsThinProps): React.ReactElement;
export default LanHeartsThin;
