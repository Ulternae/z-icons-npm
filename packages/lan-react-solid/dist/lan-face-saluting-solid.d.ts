import React from 'react';

export interface LanFaceSalutingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSalutingSolid(props: LanFaceSalutingSolidProps): React.ReactElement;
export default LanFaceSalutingSolid;
