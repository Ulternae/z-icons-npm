import React from 'react';

export interface LanTransporter2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporter2Solid(props: LanTransporter2SolidProps): React.ReactElement;
export default LanTransporter2Solid;
