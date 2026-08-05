import React from 'react';

export interface LanPersonBoothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBoothSolid(props: LanPersonBoothSolidProps): React.ReactElement;
export default LanPersonBoothSolid;
