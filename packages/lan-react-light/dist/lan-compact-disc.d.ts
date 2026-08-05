import React from 'react';

export interface LanCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompactDisc(props: LanCompactDiscProps): React.ReactElement;
export default LanCompactDisc;
