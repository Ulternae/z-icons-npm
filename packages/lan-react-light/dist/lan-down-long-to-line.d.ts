import React from 'react';

export interface LanDownLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLongToLine(props: LanDownLongToLineProps): React.ReactElement;
export default LanDownLongToLine;
