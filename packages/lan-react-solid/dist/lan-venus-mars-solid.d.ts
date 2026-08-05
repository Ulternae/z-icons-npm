import React from 'react';

export interface LanVenusMarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusMarsSolid(props: LanVenusMarsSolidProps): React.ReactElement;
export default LanVenusMarsSolid;
