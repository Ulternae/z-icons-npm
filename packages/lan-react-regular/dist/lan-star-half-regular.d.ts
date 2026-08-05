import React from 'react';

export interface LanStarHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarHalfRegular(props: LanStarHalfRegularProps): React.ReactElement;
export default LanStarHalfRegular;
