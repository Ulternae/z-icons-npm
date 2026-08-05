import React from 'react';

export interface LanChevronDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChevronDown(props: LanChevronDownProps): React.ReactElement;
export default LanChevronDown;
