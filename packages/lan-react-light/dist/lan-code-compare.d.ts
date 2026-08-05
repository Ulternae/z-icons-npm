import React from 'react';

export interface LanCodeCompareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeCompare(props: LanCodeCompareProps): React.ReactElement;
export default LanCodeCompare;
