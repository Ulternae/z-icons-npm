import React from 'react';

export interface LanArrowDownFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownFromLine(props: LanArrowDownFromLineProps): React.ReactElement;
export default LanArrowDownFromLine;
