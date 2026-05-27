import React from 'react';

export interface CorePaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperPlane: React.FC<CorePaperPlaneProps>;
export default CorePaperPlane;
