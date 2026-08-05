import React from 'react';

export interface LanAriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAriesSolid(props: LanAriesSolidProps): React.ReactElement;
export default LanAriesSolid;
