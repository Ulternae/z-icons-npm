import React from 'react';

export interface LanStadiumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStadium(props: LanStadiumProps): React.ReactElement;
export default LanStadium;
