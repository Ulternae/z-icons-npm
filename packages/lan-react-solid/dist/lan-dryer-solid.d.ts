import React from 'react';

export interface LanDryerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDryerSolid(props: LanDryerSolidProps): React.ReactElement;
export default LanDryerSolid;
