import React from 'react';

export interface LanTrashPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashPlusThin: React.FC<LanTrashPlusThinProps>;
export default LanTrashPlusThin;
