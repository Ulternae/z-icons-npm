import React from 'react';

export interface LanFileDocThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDocThin(props: LanFileDocThinProps): React.ReactElement;
export default LanFileDocThin;
