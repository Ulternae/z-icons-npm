import React from 'react';

export interface LanFaceDottedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDottedSolid(props: LanFaceDottedSolidProps): React.ReactElement;
export default LanFaceDottedSolid;
