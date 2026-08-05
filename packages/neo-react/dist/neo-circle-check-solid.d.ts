import React from 'react';

export interface NeoCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleCheckSolid(props: NeoCircleCheckSolidProps): React.ReactElement;
export default NeoCircleCheckSolid;
