import React from 'react';

export interface LanMapSignsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapSignsSolid(props: LanMapSignsSolidProps): React.ReactElement;
export default LanMapSignsSolid;
