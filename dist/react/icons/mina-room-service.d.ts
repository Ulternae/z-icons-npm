import React from 'react';

export interface MinaRoomServiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRoomService: React.FC<MinaRoomServiceProps>;
export default MinaRoomService;
