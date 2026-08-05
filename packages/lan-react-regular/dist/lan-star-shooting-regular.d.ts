import React from 'react';

export interface LanStarShootingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarShootingRegular(props: LanStarShootingRegularProps): React.ReactElement;
export default LanStarShootingRegular;
