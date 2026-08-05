import React from 'react';

export interface LanSquareBThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBThin(props: LanSquareBThinProps): React.ReactElement;
export default LanSquareBThin;
