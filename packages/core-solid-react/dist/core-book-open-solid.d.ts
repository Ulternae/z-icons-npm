import React from 'react';

export interface CoreBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookOpenSolid(props: CoreBookOpenSolidProps): React.ReactElement;
export default CoreBookOpenSolid;
