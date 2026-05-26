import React from 'react';

export interface LanPlaneUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUp: React.FC<LanPlaneUpProps>;
export default LanPlaneUp;
