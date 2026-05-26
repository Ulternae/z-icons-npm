import React from 'react';

export interface LanSquareLiraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLiraThin: React.FC<LanSquareLiraThinProps>;
export default LanSquareLiraThin;
