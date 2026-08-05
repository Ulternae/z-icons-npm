import React from 'react';

export interface MinaBathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBathSolid(props: MinaBathSolidProps): React.ReactElement;
export default MinaBathSolid;
