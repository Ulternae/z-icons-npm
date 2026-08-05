import React from 'react';

export interface LanUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersSolid(props: LanUsersSolidProps): React.ReactElement;
export default LanUsersSolid;
