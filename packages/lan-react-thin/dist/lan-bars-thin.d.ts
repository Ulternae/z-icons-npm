import React from 'react';

export interface LanBarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsThin(props: LanBarsThinProps): React.ReactElement;
export default LanBarsThin;
