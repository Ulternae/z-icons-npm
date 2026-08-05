import React from 'react';

export interface LanDungeonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDungeonSolid(props: LanDungeonSolidProps): React.ReactElement;
export default LanDungeonSolid;
