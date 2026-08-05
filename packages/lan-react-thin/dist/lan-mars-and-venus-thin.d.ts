import React from 'react';

export interface LanMarsAndVenusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsAndVenusThin(props: LanMarsAndVenusThinProps): React.ReactElement;
export default LanMarsAndVenusThin;
