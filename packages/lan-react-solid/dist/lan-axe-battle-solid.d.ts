import React from 'react';

export interface LanAxeBattleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeBattleSolid(props: LanAxeBattleSolidProps): React.ReactElement;
export default LanAxeBattleSolid;
