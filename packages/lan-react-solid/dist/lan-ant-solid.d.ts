import React from 'react';

export interface LanAntSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAntSolid(props: LanAntSolidProps): React.ReactElement;
export default LanAntSolid;
