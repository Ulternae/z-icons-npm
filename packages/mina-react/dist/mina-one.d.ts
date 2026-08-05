import React from 'react';

export interface MinaOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOne(props: MinaOneProps): React.ReactElement;
export default MinaOne;
