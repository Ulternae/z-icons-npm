import React from 'react';

export interface LanSquarePesetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesetaThin: React.FC<LanSquarePesetaThinProps>;
export default LanSquarePesetaThin;
