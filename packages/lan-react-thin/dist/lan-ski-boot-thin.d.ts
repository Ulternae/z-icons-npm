import React from 'react';

export interface LanSkiBootThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootThin(props: LanSkiBootThinProps): React.ReactElement;
export default LanSkiBootThin;
