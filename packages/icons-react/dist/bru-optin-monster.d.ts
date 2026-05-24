import React from 'react';

export interface BruOptinMonsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOptinMonster: React.FC<BruOptinMonsterProps>;
export default BruOptinMonster;
