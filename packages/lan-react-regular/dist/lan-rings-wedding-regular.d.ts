import React from 'react';

export interface LanRingsWeddingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingsWeddingRegular(props: LanRingsWeddingRegularProps): React.ReactElement;
export default LanRingsWeddingRegular;
