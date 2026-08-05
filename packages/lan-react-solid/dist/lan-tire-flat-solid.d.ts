import React from 'react';

export interface LanTireFlatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireFlatSolid(props: LanTireFlatSolidProps): React.ReactElement;
export default LanTireFlatSolid;
