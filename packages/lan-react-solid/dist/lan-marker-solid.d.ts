import React from 'react';

export interface LanMarkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarkerSolid(props: LanMarkerSolidProps): React.ReactElement;
export default LanMarkerSolid;
