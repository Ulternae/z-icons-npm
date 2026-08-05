import React from 'react';

export interface LanExpandArrowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandArrows(props: LanExpandArrowsProps): React.ReactElement;
export default LanExpandArrows;
