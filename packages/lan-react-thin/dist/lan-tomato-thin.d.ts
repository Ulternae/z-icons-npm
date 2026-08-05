import React from 'react';

export interface LanTomatoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTomatoThin(props: LanTomatoThinProps): React.ReactElement;
export default LanTomatoThin;
