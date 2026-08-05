import React from 'react';

export interface LanDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDatabaseSolid(props: LanDatabaseSolidProps): React.ReactElement;
export default LanDatabaseSolid;
