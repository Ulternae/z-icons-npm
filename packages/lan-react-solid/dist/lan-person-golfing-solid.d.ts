import React from 'react';

export interface LanPersonGolfingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonGolfingSolid(props: LanPersonGolfingSolidProps): React.ReactElement;
export default LanPersonGolfingSolid;
