import React from 'react';

export interface LanDonutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDonutThin(props: LanDonutThinProps): React.ReactElement;
export default LanDonutThin;
