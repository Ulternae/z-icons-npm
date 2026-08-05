import React from 'react';

export interface MinaRoomServiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRoomService(props: MinaRoomServiceProps): React.ReactElement;
export default MinaRoomService;
