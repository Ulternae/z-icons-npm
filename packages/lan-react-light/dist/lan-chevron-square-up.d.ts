import React from 'react';

export interface LanChevronSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChevronSquareUp(props: LanChevronSquareUpProps): React.ReactElement;
export default LanChevronSquareUp;
