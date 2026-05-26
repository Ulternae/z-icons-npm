import React from 'react';

export interface LanTrashPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashPlusRegular: React.FC<LanTrashPlusRegularProps>;
export default LanTrashPlusRegular;
