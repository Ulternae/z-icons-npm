import React from 'react';

export interface LanCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSolid(props: LanCarSolidProps): React.ReactElement;
export default LanCarSolid;
