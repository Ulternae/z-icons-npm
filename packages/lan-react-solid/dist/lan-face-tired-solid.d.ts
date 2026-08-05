import React from 'react';

export interface LanFaceTiredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTiredSolid(props: LanFaceTiredSolidProps): React.ReactElement;
export default LanFaceTiredSolid;
