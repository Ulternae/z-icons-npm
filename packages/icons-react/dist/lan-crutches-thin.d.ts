import React from 'react';

export interface LanCrutchesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutchesThin: React.FC<LanCrutchesThinProps>;
export default LanCrutchesThin;
