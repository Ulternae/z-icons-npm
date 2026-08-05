import React from 'react';

export interface LanArrowDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownToLine(props: LanArrowDownToLineProps): React.ReactElement;
export default LanArrowDownToLine;
