import React from 'react';

export interface LanCaravanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanSolid(props: LanCaravanSolidProps): React.ReactElement;
export default LanCaravanSolid;
