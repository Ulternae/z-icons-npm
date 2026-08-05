import React from 'react';

export interface LanBicepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicepSolid(props: LanBicepSolidProps): React.ReactElement;
export default LanBicepSolid;
