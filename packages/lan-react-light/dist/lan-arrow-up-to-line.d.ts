import React from 'react';

export interface LanArrowUpToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUpToLine(props: LanArrowUpToLineProps): React.ReactElement;
export default LanArrowUpToLine;
