import React from 'react';

export interface LanNonBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNonBinaryRegular(props: LanNonBinaryRegularProps): React.ReactElement;
export default LanNonBinaryRegular;
