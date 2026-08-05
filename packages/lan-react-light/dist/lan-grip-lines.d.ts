import React from 'react';

export interface LanGripLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLines(props: LanGripLinesProps): React.ReactElement;
export default LanGripLines;
