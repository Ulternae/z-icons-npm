import React from 'react';

export interface LanStadiumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStadiumRegular(props: LanStadiumRegularProps): React.ReactElement;
export default LanStadiumRegular;
