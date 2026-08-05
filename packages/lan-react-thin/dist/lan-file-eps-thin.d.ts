import React from 'react';

export interface LanFileEpsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileEpsThin(props: LanFileEpsThinProps): React.ReactElement;
export default LanFileEpsThin;
