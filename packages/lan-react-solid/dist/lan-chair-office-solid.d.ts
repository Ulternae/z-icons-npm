import React from 'react';

export interface LanChairOfficeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChairOfficeSolid(props: LanChairOfficeSolidProps): React.ReactElement;
export default LanChairOfficeSolid;
