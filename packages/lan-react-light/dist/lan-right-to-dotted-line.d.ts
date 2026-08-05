import React from 'react';

export interface LanRightToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRightToDottedLine(props: LanRightToDottedLineProps): React.ReactElement;
export default LanRightToDottedLine;
