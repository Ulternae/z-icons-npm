import React from 'react';

export interface NeoDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDatabaseSolid: React.FC<NeoDatabaseSolidProps>;
export default NeoDatabaseSolid;
