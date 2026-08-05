import React from 'react';

export interface LanHandScissorsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandScissorsThin(props: LanHandScissorsThinProps): React.ReactElement;
export default LanHandScissorsThin;
