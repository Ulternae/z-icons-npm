import React from 'react';

export interface LanMessageDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageDotSolid: React.FC<LanMessageDotSolidProps>;
export default LanMessageDotSolid;
