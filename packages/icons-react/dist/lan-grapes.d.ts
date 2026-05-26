import React from 'react';

export interface LanGrapesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrapes: React.FC<LanGrapesProps>;
export default LanGrapes;
