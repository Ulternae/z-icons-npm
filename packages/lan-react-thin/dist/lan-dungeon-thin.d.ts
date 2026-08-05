import React from 'react';

export interface LanDungeonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDungeonThin(props: LanDungeonThinProps): React.ReactElement;
export default LanDungeonThin;
