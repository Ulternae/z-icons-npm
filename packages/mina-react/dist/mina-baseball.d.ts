import React from 'react';

export interface MinaBaseballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBaseball(props: MinaBaseballProps): React.ReactElement;
export default MinaBaseball;
