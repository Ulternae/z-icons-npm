import React from 'react';

export interface LanStairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairsSolid(props: LanStairsSolidProps): React.ReactElement;
export default LanStairsSolid;
