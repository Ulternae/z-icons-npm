import React from 'react';

export interface LanLocationCrosshairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationCrosshairsSolid(props: LanLocationCrosshairsSolidProps): React.ReactElement;
export default LanLocationCrosshairsSolid;
