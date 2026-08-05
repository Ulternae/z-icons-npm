import React from 'react';

export interface LanUpToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpToDottedLine(props: LanUpToDottedLineProps): React.ReactElement;
export default LanUpToDottedLine;
