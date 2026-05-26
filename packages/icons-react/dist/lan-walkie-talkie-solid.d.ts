import React from 'react';

export interface LanWalkieTalkieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkieTalkieSolid: React.FC<LanWalkieTalkieSolidProps>;
export default LanWalkieTalkieSolid;
