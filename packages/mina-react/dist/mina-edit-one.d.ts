import React from 'react';

export interface MinaEditOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEditOne(props: MinaEditOneProps): React.ReactElement;
export default MinaEditOne;
