import React from 'react';

export interface LanArrowsCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsCrossThin(props: LanArrowsCrossThinProps): React.ReactElement;
export default LanArrowsCrossThin;
