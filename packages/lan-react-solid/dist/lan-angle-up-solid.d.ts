import React from 'react';

export interface LanAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleUpSolid(props: LanAngleUpSolidProps): React.ReactElement;
export default LanAngleUpSolid;
