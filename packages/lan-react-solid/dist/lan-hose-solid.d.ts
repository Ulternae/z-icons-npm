import React from 'react';

export interface LanHoseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseSolid(props: LanHoseSolidProps): React.ReactElement;
export default LanHoseSolid;
