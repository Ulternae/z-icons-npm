import React from 'react';

export interface LanPersonSoccerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSoccerRegular(props: LanPersonSoccerRegularProps): React.ReactElement;
export default LanPersonSoccerRegular;
