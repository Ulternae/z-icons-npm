import React from 'react';

export interface LanHeartCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCirclePlusSolid(props: LanHeartCirclePlusSolidProps): React.ReactElement;
export default LanHeartCirclePlusSolid;
