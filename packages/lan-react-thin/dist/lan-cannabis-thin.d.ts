import React from 'react';

export interface LanCannabisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannabisThin(props: LanCannabisThinProps): React.ReactElement;
export default LanCannabisThin;
