import React from 'react';

export interface LanMegaphoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMegaphoneSolid(props: LanMegaphoneSolidProps): React.ReactElement;
export default LanMegaphoneSolid;
