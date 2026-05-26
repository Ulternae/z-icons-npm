import React from 'react';

export interface LanEraserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEraserSolid: React.FC<LanEraserSolidProps>;
export default LanEraserSolid;
