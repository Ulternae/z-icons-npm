import React from 'react';

export interface LanFileMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMinus(props: LanFileMinusProps): React.ReactElement;
export default LanFileMinus;
