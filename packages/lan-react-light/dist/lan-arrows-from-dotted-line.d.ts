import React from 'react';

export interface LanArrowsFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsFromDottedLine(props: LanArrowsFromDottedLineProps): React.ReactElement;
export default LanArrowsFromDottedLine;
