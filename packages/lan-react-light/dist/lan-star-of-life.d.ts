import React from 'react';

export interface LanStarOfLifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarOfLife(props: LanStarOfLifeProps): React.ReactElement;
export default LanStarOfLife;
