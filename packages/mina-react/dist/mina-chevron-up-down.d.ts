import React from 'react';

export interface MinaChevronUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChevronUpDown(props: MinaChevronUpDownProps): React.ReactElement;
export default MinaChevronUpDown;
