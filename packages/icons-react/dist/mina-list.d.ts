import React from 'react';

export interface MinaListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaList: React.FC<MinaListProps>;
export default MinaList;
