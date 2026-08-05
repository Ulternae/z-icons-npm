import React from 'react';

export interface LanMopedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMopedSolid(props: LanMopedSolidProps): React.ReactElement;
export default LanMopedSolid;
