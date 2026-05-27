import React from 'react';

export interface CoreDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDatabaseSolid: React.FC<CoreDatabaseSolidProps>;
export default CoreDatabaseSolid;
