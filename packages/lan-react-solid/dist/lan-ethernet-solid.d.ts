import React from 'react';

export interface LanEthernetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEthernetSolid(props: LanEthernetSolidProps): React.ReactElement;
export default LanEthernetSolid;
