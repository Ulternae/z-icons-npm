import React from 'react';

export interface MinaHeartDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartDot(props: MinaHeartDotProps): React.ReactElement;
export default MinaHeartDot;
