import React from 'react';

export interface LanFaceFearfulSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFearfulSolid(props: LanFaceFearfulSolidProps): React.ReactElement;
export default LanFaceFearfulSolid;
