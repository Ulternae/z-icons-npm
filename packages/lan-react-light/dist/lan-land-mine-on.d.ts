import React from 'react';

export interface LanLandMineOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandMineOn(props: LanLandMineOnProps): React.ReactElement;
export default LanLandMineOn;
