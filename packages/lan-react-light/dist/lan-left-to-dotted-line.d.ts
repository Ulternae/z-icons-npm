import React from 'react';

export interface LanLeftToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeftToDottedLine(props: LanLeftToDottedLineProps): React.ReactElement;
export default LanLeftToDottedLine;
