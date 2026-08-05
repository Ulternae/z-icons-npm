import React from 'react';

export interface MinaDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDatabaseSolid(props: MinaDatabaseSolidProps): React.ReactElement;
export default MinaDatabaseSolid;
