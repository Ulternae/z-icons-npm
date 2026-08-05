import React from 'react';

export interface LanGrid2MinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2MinusSolid(props: LanGrid2MinusSolidProps): React.ReactElement;
export default LanGrid2MinusSolid;
