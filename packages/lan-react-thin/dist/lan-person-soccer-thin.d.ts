import React from 'react';

export interface LanPersonSoccerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSoccerThin(props: LanPersonSoccerThinProps): React.ReactElement;
export default LanPersonSoccerThin;
