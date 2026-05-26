import React from 'react';

export interface LanTrashPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashPlus: React.FC<LanTrashPlusProps>;
export default LanTrashPlus;
