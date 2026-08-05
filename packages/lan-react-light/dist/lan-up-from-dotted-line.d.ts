import React from 'react';

export interface LanUpFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpFromDottedLine(props: LanUpFromDottedLineProps): React.ReactElement;
export default LanUpFromDottedLine;
