import React from 'react';

export interface LanStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarRegular(props: LanStarRegularProps): React.ReactElement;
export default LanStarRegular;
