import React from 'react';

export interface LanUpLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLongToLine(props: LanUpLongToLineProps): React.ReactElement;
export default LanUpLongToLine;
