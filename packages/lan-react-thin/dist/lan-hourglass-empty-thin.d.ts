import React from 'react';

export interface LanHourglassEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassEmptyThin(props: LanHourglassEmptyThinProps): React.ReactElement;
export default LanHourglassEmptyThin;
