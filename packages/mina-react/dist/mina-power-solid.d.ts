import React from 'react';

export interface MinaPowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPowerSolid(props: MinaPowerSolidProps): React.ReactElement;
export default MinaPowerSolid;
