import React from 'react';

export interface LanDownFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownFromDottedLine(props: LanDownFromDottedLineProps): React.ReactElement;
export default LanDownFromDottedLine;
