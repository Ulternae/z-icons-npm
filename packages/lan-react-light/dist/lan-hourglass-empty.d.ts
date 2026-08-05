import React from 'react';

export interface LanHourglassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassEmpty(props: LanHourglassEmptyProps): React.ReactElement;
export default LanHourglassEmpty;
