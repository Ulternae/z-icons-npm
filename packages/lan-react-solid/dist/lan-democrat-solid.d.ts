import React from 'react';

export interface LanDemocratSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDemocratSolid(props: LanDemocratSolidProps): React.ReactElement;
export default LanDemocratSolid;
