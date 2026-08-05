import React from 'react';

export interface LanOctagonXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonXmarkSolid(props: LanOctagonXmarkSolidProps): React.ReactElement;
export default LanOctagonXmarkSolid;
