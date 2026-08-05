import React from 'react';

export interface MinaHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHandSolid(props: MinaHandSolidProps): React.ReactElement;
export default MinaHandSolid;
