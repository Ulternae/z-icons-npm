import React from 'react';

export interface LanLeftLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeftLongToLine(props: LanLeftLongToLineProps): React.ReactElement;
export default LanLeftLongToLine;
