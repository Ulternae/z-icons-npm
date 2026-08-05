import React from 'react';

export interface LanWatermelonSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatermelonSliceSolid(props: LanWatermelonSliceSolidProps): React.ReactElement;
export default LanWatermelonSliceSolid;
