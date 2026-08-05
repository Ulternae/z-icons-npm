import React from 'react';

export interface LanPersonWavingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWavingSolid(props: LanPersonWavingSolidProps): React.ReactElement;
export default LanPersonWavingSolid;
