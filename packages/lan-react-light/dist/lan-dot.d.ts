import React from 'react';

export interface LanDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDot(props: LanDotProps): React.ReactElement;
export default LanDot;
