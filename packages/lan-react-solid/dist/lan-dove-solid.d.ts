import React from 'react';

export interface LanDoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoveSolid(props: LanDoveSolidProps): React.ReactElement;
export default LanDoveSolid;
