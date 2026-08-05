import React from 'react';

export interface LanArrowsToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToLine(props: LanArrowsToLineProps): React.ReactElement;
export default LanArrowsToLine;
