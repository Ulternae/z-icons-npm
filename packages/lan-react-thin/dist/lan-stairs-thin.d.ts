import React from 'react';

export interface LanStairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairsThin(props: LanStairsThinProps): React.ReactElement;
export default LanStairsThin;
