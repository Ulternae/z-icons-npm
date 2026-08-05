import React from 'react';

export interface LanWagonCoveredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWagonCovered(props: LanWagonCoveredProps): React.ReactElement;
export default LanWagonCovered;
