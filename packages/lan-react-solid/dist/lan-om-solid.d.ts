import React from 'react';

export interface LanOmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmSolid(props: LanOmSolidProps): React.ReactElement;
export default LanOmSolid;
