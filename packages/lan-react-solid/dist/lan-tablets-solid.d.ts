import React from 'react';

export interface LanTabletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletsSolid(props: LanTabletsSolidProps): React.ReactElement;
export default LanTabletsSolid;
