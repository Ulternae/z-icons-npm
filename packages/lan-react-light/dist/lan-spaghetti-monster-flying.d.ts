import React from 'react';

export interface LanSpaghettiMonsterFlyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaghettiMonsterFlying(props: LanSpaghettiMonsterFlyingProps): React.ReactElement;
export default LanSpaghettiMonsterFlying;
