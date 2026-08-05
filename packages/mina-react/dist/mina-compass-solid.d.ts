import React from 'react';

export interface MinaCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCompassSolid(props: MinaCompassSolidProps): React.ReactElement;
export default MinaCompassSolid;
