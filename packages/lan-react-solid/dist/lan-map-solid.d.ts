import React from 'react';

export interface LanMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapSolid(props: LanMapSolidProps): React.ReactElement;
export default LanMapSolid;
