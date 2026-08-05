import React from 'react';

export interface LanPlugCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCirclePlusSolid(props: LanPlugCirclePlusSolidProps): React.ReactElement;
export default LanPlugCirclePlusSolid;
