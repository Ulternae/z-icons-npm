import React from 'react';

export interface LanPoliceBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoliceBoxSolid(props: LanPoliceBoxSolidProps): React.ReactElement;
export default LanPoliceBoxSolid;
