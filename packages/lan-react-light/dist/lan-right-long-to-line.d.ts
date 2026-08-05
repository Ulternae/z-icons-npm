import React from 'react';

export interface LanRightLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRightLongToLine(props: LanRightLongToLineProps): React.ReactElement;
export default LanRightLongToLine;
