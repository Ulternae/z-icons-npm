import React from 'react';

export interface LanSkiBootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootSolid(props: LanSkiBootSolidProps): React.ReactElement;
export default LanSkiBootSolid;
