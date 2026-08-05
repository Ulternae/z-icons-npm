import React from 'react';

export interface MinaChevronRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChevronRight(props: MinaChevronRightProps): React.ReactElement;
export default MinaChevronRight;
