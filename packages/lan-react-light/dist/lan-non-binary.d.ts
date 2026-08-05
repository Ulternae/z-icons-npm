import React from 'react';

export interface LanNonBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNonBinary(props: LanNonBinaryProps): React.ReactElement;
export default LanNonBinary;
