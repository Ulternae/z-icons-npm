import React from 'react';

export interface LanWagonCoveredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWagonCoveredThin(props: LanWagonCoveredThinProps): React.ReactElement;
export default LanWagonCoveredThin;
