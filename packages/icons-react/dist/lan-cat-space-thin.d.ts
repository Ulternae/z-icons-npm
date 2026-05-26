import React from 'react';

export interface LanCatSpaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatSpaceThin: React.FC<LanCatSpaceThinProps>;
export default LanCatSpaceThin;
