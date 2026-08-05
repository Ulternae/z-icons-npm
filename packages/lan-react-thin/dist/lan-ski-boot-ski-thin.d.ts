import React from 'react';

export interface LanSkiBootSkiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootSkiThin(props: LanSkiBootSkiThinProps): React.ReactElement;
export default LanSkiBootSkiThin;
