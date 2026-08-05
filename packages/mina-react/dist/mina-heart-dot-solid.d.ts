import React from 'react';

export interface MinaHeartDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartDotSolid(props: MinaHeartDotSolidProps): React.ReactElement;
export default MinaHeartDotSolid;
