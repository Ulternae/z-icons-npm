import React from 'react';

export interface LanMosquitoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoSolid(props: LanMosquitoSolidProps): React.ReactElement;
export default LanMosquitoSolid;
