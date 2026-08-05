import React from 'react';

export interface LanCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlusSolid(props: LanCirclePlusSolidProps): React.ReactElement;
export default LanCirclePlusSolid;
