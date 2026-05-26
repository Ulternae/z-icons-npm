import React from 'react';

export interface LanEraserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEraser: React.FC<LanEraserProps>;
export default LanEraser;
