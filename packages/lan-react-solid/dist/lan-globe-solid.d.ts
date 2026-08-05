import React from 'react';

export interface LanGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeSolid(props: LanGlobeSolidProps): React.ReactElement;
export default LanGlobeSolid;
