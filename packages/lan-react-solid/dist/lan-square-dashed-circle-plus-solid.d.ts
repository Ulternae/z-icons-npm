import React from 'react';

export interface LanSquareDashedCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashedCirclePlusSolid(props: LanSquareDashedCirclePlusSolidProps): React.ReactElement;
export default LanSquareDashedCirclePlusSolid;
