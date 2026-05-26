import React from 'react';

export interface LanAxeBattleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeBattleThin: React.FC<LanAxeBattleThinProps>;
export default LanAxeBattleThin;
