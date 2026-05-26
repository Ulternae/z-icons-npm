import React from 'react';

export interface LanGripLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLinesThin: React.FC<LanGripLinesThinProps>;
export default LanGripLinesThin;
