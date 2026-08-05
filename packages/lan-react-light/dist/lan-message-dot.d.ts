import React from 'react';

export interface LanMessageDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageDot(props: LanMessageDotProps): React.ReactElement;
export default LanMessageDot;
