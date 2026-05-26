import React from 'react';

export interface LanRectangleBetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleBeta: React.FC<LanRectangleBetaProps>;
export default LanRectangleBeta;
