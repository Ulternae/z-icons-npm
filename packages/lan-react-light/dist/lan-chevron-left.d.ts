import React from 'react';

export interface LanChevronLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChevronLeft(props: LanChevronLeftProps): React.ReactElement;
export default LanChevronLeft;
