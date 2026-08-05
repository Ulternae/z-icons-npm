import React from 'react';

export interface LanNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNThin(props: LanNThinProps): React.ReactElement;
export default LanNThin;
