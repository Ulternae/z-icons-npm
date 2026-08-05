import React from 'react';

export interface LanArrowsCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsCross(props: LanArrowsCrossProps): React.ReactElement;
export default LanArrowsCross;
