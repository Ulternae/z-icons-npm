import React from 'react';

export interface LanMapSignsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapSignsThin(props: LanMapSignsThinProps): React.ReactElement;
export default LanMapSignsThin;
