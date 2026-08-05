import React from 'react';

export interface LanStadiumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStadiumThin(props: LanStadiumThinProps): React.ReactElement;
export default LanStadiumThin;
