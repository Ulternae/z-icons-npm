import React from 'react';

export interface LanSaxophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxophoneSolid(props: LanSaxophoneSolidProps): React.ReactElement;
export default LanSaxophoneSolid;
