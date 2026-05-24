import React from 'react';

export interface BruMetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMeta: React.FC<BruMetaProps>;
export default BruMeta;
