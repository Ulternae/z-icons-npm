import React from 'react';

export interface LanCowbellCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellCirclePlusSolid(props: LanCowbellCirclePlusSolidProps): React.ReactElement;
export default LanCowbellCirclePlusSolid;
