import React from 'react';

export interface LanArrowsToDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToDot(props: LanArrowsToDotProps): React.ReactElement;
export default LanArrowsToDot;
