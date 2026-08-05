import React from 'react';

export interface LanLineColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineColumnsThin(props: LanLineColumnsThinProps): React.ReactElement;
export default LanLineColumnsThin;
