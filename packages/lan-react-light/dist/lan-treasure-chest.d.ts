import React from 'react';

export interface LanTreasureChestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreasureChest(props: LanTreasureChestProps): React.ReactElement;
export default LanTreasureChest;
