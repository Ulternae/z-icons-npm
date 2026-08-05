import React from 'react';

export interface MinaSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSeven(props: MinaSevenProps): React.ReactElement;
export default MinaSeven;
