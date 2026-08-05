import React from 'react';

export interface LanGlobeSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeSnowSolid(props: LanGlobeSnowSolidProps): React.ReactElement;
export default LanGlobeSnowSolid;
