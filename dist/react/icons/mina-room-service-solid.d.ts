import React from 'react';

export interface MinaRoomServiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRoomServiceSolid: React.FC<MinaRoomServiceSolidProps>;
export default MinaRoomServiceSolid;
