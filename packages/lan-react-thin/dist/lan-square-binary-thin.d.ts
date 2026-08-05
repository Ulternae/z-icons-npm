import React from 'react';

export interface LanSquareBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBinaryThin(props: LanSquareBinaryThinProps): React.ReactElement;
export default LanSquareBinaryThin;
