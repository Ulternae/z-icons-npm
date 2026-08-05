import React from 'react';

export interface LanFaceTissueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTissueSolid(props: LanFaceTissueSolidProps): React.ReactElement;
export default LanFaceTissueSolid;
