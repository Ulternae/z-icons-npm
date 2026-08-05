import React from 'react';

export interface MinaSearchPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchPlus(props: MinaSearchPlusProps): React.ReactElement;
export default MinaSearchPlus;
