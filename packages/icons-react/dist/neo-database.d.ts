import React from 'react';

export interface NeoDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDatabase: React.FC<NeoDatabaseProps>;
export default NeoDatabase;
