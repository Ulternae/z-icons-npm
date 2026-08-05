import React from 'react';

export interface LanMosquitoNetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMosquitoNetSolid(props: LanMosquitoNetSolidProps): React.ReactElement;
export default LanMosquitoNetSolid;
