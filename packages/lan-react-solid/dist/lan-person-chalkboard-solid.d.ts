import React from 'react';

export interface LanPersonChalkboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonChalkboardSolid(props: LanPersonChalkboardSolidProps): React.ReactElement;
export default LanPersonChalkboardSolid;
