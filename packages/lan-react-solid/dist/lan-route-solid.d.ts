import React from 'react';

export interface LanRouteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteSolid(props: LanRouteSolidProps): React.ReactElement;
export default LanRouteSolid;
