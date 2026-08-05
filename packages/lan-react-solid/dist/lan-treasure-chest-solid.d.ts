import React from 'react';

export interface LanTreasureChestSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreasureChestSolid(props: LanTreasureChestSolidProps): React.ReactElement;
export default LanTreasureChestSolid;
