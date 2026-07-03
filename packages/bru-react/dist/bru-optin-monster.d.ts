import React from 'react';

export interface BruOptinMonsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOptinMonster(props: BruOptinMonsterProps): React.ReactElement;
export default BruOptinMonster;
