import React from 'react';

export interface CoreCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCheckSolid(props: CoreCheckSolidProps): React.ReactElement;
export default CoreCheckSolid;
