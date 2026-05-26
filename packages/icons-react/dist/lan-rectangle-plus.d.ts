import React from 'react';

export interface LanRectanglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePlus: React.FC<LanRectanglePlusProps>;
export default LanRectanglePlus;
