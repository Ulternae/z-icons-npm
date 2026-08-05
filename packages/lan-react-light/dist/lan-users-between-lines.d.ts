import React from 'react';

export interface LanUsersBetweenLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersBetweenLines(props: LanUsersBetweenLinesProps): React.ReactElement;
export default LanUsersBetweenLines;
