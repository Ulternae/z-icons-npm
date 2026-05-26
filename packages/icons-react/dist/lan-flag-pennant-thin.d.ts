import React from 'react';

export interface LanFlagPennantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagPennantThin: React.FC<LanFlagPennantThinProps>;
export default LanFlagPennantThin;
