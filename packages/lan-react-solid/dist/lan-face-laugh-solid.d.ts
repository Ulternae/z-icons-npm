import React from 'react';

export interface LanFaceLaughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughSolid(props: LanFaceLaughSolidProps): React.ReactElement;
export default LanFaceLaughSolid;
