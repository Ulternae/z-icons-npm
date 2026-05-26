import React from 'react';

export interface LanDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDatabaseSolid: React.FC<LanDatabaseSolidProps>;
export default LanDatabaseSolid;
