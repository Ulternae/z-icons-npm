import React from 'react';

export interface MinaAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersandSolid(props: MinaAmpersandSolidProps): React.ReactElement;
export default MinaAmpersandSolid;
