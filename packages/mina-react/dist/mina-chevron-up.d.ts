import React from 'react';

export interface MinaChevronUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChevronUp(props: MinaChevronUpProps): React.ReactElement;
export default MinaChevronUp;
