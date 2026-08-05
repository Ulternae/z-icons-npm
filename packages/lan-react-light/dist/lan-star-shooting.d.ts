import React from 'react';

export interface LanStarShootingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarShooting(props: LanStarShootingProps): React.ReactElement;
export default LanStarShooting;
