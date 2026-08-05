import React from 'react';

export interface MinaSearchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearch(props: MinaSearchProps): React.ReactElement;
export default MinaSearch;
