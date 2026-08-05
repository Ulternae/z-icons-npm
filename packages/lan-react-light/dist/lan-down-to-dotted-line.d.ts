import React from 'react';

export interface LanDownToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToDottedLine(props: LanDownToDottedLineProps): React.ReactElement;
export default LanDownToDottedLine;
