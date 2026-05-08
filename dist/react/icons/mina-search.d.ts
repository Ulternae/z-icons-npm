import React from 'react';

export interface MinaSearchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearch: React.FC<MinaSearchProps>;
export default MinaSearch;
