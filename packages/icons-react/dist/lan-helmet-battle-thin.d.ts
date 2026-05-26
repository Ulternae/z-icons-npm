import React from 'react';

export interface LanHelmetBattleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetBattleThin: React.FC<LanHelmetBattleThinProps>;
export default LanHelmetBattleThin;
