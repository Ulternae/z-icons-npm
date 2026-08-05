import React from 'react';

export interface LanPlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayPauseSolid(props: LanPlayPauseSolidProps): React.ReactElement;
export default LanPlayPauseSolid;
