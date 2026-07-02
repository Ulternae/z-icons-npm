import React from 'react';

export interface CoreBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookSolid(props: CoreBookSolidProps): React.ReactElement;
export default CoreBookSolid;
