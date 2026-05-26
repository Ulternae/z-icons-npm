import React from 'react';

export interface LanEraserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEraserRegular: React.FC<LanEraserRegularProps>;
export default LanEraserRegular;
