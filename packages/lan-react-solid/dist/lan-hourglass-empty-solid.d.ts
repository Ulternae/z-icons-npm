import React from 'react';

export interface LanHourglassEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassEmptySolid(props: LanHourglassEmptySolidProps): React.ReactElement;
export default LanHourglassEmptySolid;
