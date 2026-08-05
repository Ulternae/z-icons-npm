import React from 'react';

export interface LanUfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoSolid(props: LanUfoSolidProps): React.ReactElement;
export default LanUfoSolid;
