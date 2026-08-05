import React from 'react';

export interface LanKiwiBirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiBirdSolid(props: LanKiwiBirdSolidProps): React.ReactElement;
export default LanKiwiBirdSolid;
