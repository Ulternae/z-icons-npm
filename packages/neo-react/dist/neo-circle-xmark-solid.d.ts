import React from 'react';

export interface NeoCircleXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleXmarkSolid(props: NeoCircleXmarkSolidProps): React.ReactElement;
export default NeoCircleXmarkSolid;
