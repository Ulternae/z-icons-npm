import React from 'react';

export interface LanBookOpenLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenLines(props: LanBookOpenLinesProps): React.ReactElement;
export default LanBookOpenLines;
