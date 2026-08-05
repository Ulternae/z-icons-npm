import React from 'react';

export interface LanBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryThin(props: LanBinaryThinProps): React.ReactElement;
export default LanBinaryThin;
