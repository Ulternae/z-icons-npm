import React from 'react';

export interface LanTelescopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTelescopeSolid(props: LanTelescopeSolidProps): React.ReactElement;
export default LanTelescopeSolid;
