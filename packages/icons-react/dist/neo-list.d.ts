import React from 'react';

export interface NeoListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoList: React.FC<NeoListProps>;
export default NeoList;
