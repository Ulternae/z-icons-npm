import React from 'react';

export interface LanPersonSoccerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSoccerSolid(props: LanPersonSoccerSolidProps): React.ReactElement;
export default LanPersonSoccerSolid;
