import React from 'react';

export interface LanAcornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAcornSolid(props: LanAcornSolidProps): React.ReactElement;
export default LanAcornSolid;
