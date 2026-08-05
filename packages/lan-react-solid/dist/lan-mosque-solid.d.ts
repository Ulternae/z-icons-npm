import React from 'react';

export interface LanMosqueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosqueSolid(props: LanMosqueSolidProps): React.ReactElement;
export default LanMosqueSolid;
