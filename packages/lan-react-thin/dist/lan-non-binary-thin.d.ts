import React from 'react';

export interface LanNonBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNonBinaryThin(props: LanNonBinaryThinProps): React.ReactElement;
export default LanNonBinaryThin;
