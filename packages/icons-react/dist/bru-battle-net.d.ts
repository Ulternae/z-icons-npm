import React from 'react';

export interface BruBattleNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBattleNet: React.FC<BruBattleNetProps>;
export default BruBattleNet;
