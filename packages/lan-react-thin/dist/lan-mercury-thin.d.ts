import React from 'react';

export interface LanMercuryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMercuryThin(props: LanMercuryThinProps): React.ReactElement;
export default LanMercuryThin;
