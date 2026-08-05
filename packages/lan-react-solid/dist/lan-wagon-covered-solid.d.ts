import React from 'react';

export interface LanWagonCoveredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWagonCoveredSolid(props: LanWagonCoveredSolidProps): React.ReactElement;
export default LanWagonCoveredSolid;
