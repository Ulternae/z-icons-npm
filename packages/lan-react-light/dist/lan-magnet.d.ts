import React from 'react';

export interface LanMagnetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnet(props: LanMagnetProps): React.ReactElement;
export default LanMagnet;
