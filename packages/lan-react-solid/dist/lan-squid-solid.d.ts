import React from 'react';

export interface LanSquidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquidSolid(props: LanSquidSolidProps): React.ReactElement;
export default LanSquidSolid;
