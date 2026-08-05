import React from 'react';

export interface LanCarSirenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenSolid(props: LanCarSirenSolidProps): React.ReactElement;
export default LanCarSirenSolid;
