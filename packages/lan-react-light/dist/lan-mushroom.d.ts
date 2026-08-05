import React from 'react';

export interface LanMushroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMushroom(props: LanMushroomProps): React.ReactElement;
export default LanMushroom;
