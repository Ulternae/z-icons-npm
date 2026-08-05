import React from 'react';

export interface LanMustacheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMustacheSolid(props: LanMustacheSolidProps): React.ReactElement;
export default LanMustacheSolid;
