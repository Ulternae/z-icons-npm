import React from 'react';

export interface LanCrosshairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairsSolid(props: LanCrosshairsSolidProps): React.ReactElement;
export default LanCrosshairsSolid;
