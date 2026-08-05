import React from 'react';

export interface NeoCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleHalfStrokeSolid(props: NeoCircleHalfStrokeSolidProps): React.ReactElement;
export default NeoCircleHalfStrokeSolid;
