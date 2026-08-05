import React from 'react';

export interface LanStarshipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarshipRegular(props: LanStarshipRegularProps): React.ReactElement;
export default LanStarshipRegular;
