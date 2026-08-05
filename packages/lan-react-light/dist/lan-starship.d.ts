import React from 'react';

export interface LanStarshipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarship(props: LanStarshipProps): React.ReactElement;
export default LanStarship;
