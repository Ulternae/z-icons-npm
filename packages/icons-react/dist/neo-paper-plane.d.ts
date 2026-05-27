import React from 'react';

export interface NeoPaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperPlane: React.FC<NeoPaperPlaneProps>;
export default NeoPaperPlane;
