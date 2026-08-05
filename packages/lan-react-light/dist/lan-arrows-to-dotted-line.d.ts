import React from 'react';

export interface LanArrowsToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToDottedLine(props: LanArrowsToDottedLineProps): React.ReactElement;
export default LanArrowsToDottedLine;
