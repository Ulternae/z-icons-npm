import React from 'react';

export interface LanLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationArrow(props: LanLocationArrowProps): React.ReactElement;
export default LanLocationArrow;
