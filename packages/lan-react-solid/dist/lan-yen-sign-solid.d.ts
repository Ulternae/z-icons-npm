import React from 'react';

export interface LanYenSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYenSignSolid(props: LanYenSignSolidProps): React.ReactElement;
export default LanYenSignSolid;
