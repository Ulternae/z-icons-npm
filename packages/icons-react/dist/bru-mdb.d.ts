import React from 'react';

export interface BruMdbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMdb: React.FC<BruMdbProps>;
export default BruMdb;
