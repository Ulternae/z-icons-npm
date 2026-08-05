import React from 'react';

export interface LanRightFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRightFromDottedLine(props: LanRightFromDottedLineProps): React.ReactElement;
export default LanRightFromDottedLine;
