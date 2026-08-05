import React from 'react';

export interface LanMenorahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMenorahThin(props: LanMenorahThinProps): React.ReactElement;
export default LanMenorahThin;
