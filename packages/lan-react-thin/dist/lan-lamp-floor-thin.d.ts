import React from 'react';

export interface LanLampFloorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampFloorThin(props: LanLampFloorThinProps): React.ReactElement;
export default LanLampFloorThin;
