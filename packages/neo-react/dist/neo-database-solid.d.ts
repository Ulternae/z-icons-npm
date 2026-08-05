import React from 'react';

export interface NeoDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDatabaseSolid(props: NeoDatabaseSolidProps): React.ReactElement;
export default NeoDatabaseSolid;
