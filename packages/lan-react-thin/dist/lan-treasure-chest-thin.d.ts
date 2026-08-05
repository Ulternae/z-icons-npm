import React from 'react';

export interface LanTreasureChestThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreasureChestThin(props: LanTreasureChestThinProps): React.ReactElement;
export default LanTreasureChestThin;
