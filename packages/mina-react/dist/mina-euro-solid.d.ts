import React from 'react';

export interface MinaEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroSolid(props: MinaEuroSolidProps): React.ReactElement;
export default MinaEuroSolid;
