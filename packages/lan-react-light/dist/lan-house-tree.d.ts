import React from 'react';

export interface LanHouseTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTree(props: LanHouseTreeProps): React.ReactElement;
export default LanHouseTree;
