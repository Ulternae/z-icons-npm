import React from 'react';

export interface LanFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMinusSolid(props: LanFileMinusSolidProps): React.ReactElement;
export default LanFileMinusSolid;
