import React from 'react';

export interface MinaChevronLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChevronLeft(props: MinaChevronLeftProps): React.ReactElement;
export default MinaChevronLeft;
