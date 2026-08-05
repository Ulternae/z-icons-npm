import React from 'react';

export interface LanSkiBootSkiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootSkiSolid(props: LanSkiBootSkiSolidProps): React.ReactElement;
export default LanSkiBootSkiSolid;
