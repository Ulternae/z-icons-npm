import React from 'react';

export interface CoreHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHandSolid(props: CoreHandSolidProps): React.ReactElement;
export default CoreHandSolid;
