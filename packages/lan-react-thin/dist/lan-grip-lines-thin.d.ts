import React from 'react';

export interface LanGripLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesThin(props: LanGripLinesThinProps): React.ReactElement;
export default LanGripLinesThin;
