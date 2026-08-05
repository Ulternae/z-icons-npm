import React from 'react';

export interface LanDragonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDragon(props: LanDragonProps): React.ReactElement;
export default LanDragon;
