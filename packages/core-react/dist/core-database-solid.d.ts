import React from 'react';

export interface CoreDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDatabaseSolid(props: CoreDatabaseSolidProps): React.ReactElement;
export default CoreDatabaseSolid;
