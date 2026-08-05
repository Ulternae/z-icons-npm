import React from 'react';

export interface LanFaceSadCrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSadCrySolid(props: LanFaceSadCrySolidProps): React.ReactElement;
export default LanFaceSadCrySolid;
