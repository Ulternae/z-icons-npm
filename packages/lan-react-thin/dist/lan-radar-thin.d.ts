import React from 'react';

export interface LanRadarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadarThin(props: LanRadarThinProps): React.ReactElement;
export default LanRadarThin;
