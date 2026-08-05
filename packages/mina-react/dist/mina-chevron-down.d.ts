import React from 'react';

export interface MinaChevronDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChevronDown(props: MinaChevronDownProps): React.ReactElement;
export default MinaChevronDown;
