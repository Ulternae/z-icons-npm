import React from 'react';

export interface LanCaravanAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanAltSolid(props: LanCaravanAltSolidProps): React.ReactElement;
export default LanCaravanAltSolid;
