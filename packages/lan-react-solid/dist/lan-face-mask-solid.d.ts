import React from 'react';

export interface LanFaceMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMaskSolid(props: LanFaceMaskSolidProps): React.ReactElement;
export default LanFaceMaskSolid;
