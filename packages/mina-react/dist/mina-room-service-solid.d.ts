import React from 'react';

export interface MinaRoomServiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRoomServiceSolid(props: MinaRoomServiceSolidProps): React.ReactElement;
export default MinaRoomServiceSolid;
