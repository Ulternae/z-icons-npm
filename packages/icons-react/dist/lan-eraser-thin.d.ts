import React from 'react';

export interface LanEraserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEraserThin: React.FC<LanEraserThinProps>;
export default LanEraserThin;
