import React from 'react';

export interface LanLandMineOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandMineOnThin(props: LanLandMineOnThinProps): React.ReactElement;
export default LanLandMineOnThin;
