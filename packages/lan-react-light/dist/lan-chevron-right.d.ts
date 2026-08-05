import React from 'react';

export interface LanChevronRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChevronRight(props: LanChevronRightProps): React.ReactElement;
export default LanChevronRight;
