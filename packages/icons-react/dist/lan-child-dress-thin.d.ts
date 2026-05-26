import React from 'react';

export interface LanChildDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildDressThin: React.FC<LanChildDressThinProps>;
export default LanChildDressThin;
