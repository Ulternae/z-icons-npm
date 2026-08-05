import React from 'react';

export interface MinaScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaScissors(props: MinaScissorsProps): React.ReactElement;
export default MinaScissors;
