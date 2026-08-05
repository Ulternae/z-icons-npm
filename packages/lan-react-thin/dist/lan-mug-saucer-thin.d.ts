import React from 'react';

export interface LanMugSaucerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugSaucerThin(props: LanMugSaucerThinProps): React.ReactElement;
export default LanMugSaucerThin;
