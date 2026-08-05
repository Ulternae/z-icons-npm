import React from 'react';

export interface NeoHeartHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeartHalfSolid(props: NeoHeartHalfSolidProps): React.ReactElement;
export default NeoHeartHalfSolid;
