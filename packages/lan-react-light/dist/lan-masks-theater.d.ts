import React from 'react';

export interface LanMasksTheaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMasksTheater(props: LanMasksTheaterProps): React.ReactElement;
export default LanMasksTheater;
