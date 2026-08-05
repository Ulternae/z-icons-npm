import React from 'react';

export interface LanDungeonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDungeonRegular(props: LanDungeonRegularProps): React.ReactElement;
export default LanDungeonRegular;
