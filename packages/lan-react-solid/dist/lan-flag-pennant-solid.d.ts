import React from 'react';

export interface LanFlagPennantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagPennantSolid(props: LanFlagPennantSolidProps): React.ReactElement;
export default LanFlagPennantSolid;
