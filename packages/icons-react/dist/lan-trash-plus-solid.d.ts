import React from 'react';

export interface LanTrashPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashPlusSolid: React.FC<LanTrashPlusSolidProps>;
export default LanTrashPlusSolid;
