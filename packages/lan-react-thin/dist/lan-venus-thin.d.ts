import React from 'react';

export interface LanVenusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusThin(props: LanVenusThinProps): React.ReactElement;
export default LanVenusThin;
