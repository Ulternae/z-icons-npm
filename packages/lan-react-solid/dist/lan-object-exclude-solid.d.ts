import React from 'react';

export interface LanObjectExcludeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectExcludeSolid(props: LanObjectExcludeSolidProps): React.ReactElement;
export default LanObjectExcludeSolid;
