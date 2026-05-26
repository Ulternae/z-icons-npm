import React from 'react';

export interface LanDiceOneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceOneThin: React.FC<LanDiceOneThinProps>;
export default LanDiceOneThin;
