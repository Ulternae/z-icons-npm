import React from 'react';

export interface LanRingsWeddingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingsWedding(props: LanRingsWeddingProps): React.ReactElement;
export default LanRingsWedding;
