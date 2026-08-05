import React from 'react';

export interface LanImageCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCirclePlusSolid(props: LanImageCirclePlusSolidProps): React.ReactElement;
export default LanImageCirclePlusSolid;
