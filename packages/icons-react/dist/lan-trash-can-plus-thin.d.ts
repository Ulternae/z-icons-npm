import React from 'react';

export interface LanTrashCanPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanPlusThin: React.FC<LanTrashCanPlusThinProps>;
export default LanTrashCanPlusThin;
