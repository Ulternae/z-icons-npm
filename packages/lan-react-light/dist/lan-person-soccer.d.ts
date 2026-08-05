import React from 'react';

export interface LanPersonSoccerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSoccer(props: LanPersonSoccerProps): React.ReactElement;
export default LanPersonSoccer;
