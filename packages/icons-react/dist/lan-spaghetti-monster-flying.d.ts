import React from 'react';

export interface LanSpaghettiMonsterFlyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaghettiMonsterFlying: React.FC<LanSpaghettiMonsterFlyingProps>;
export default LanSpaghettiMonsterFlying;
