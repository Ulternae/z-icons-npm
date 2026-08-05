import React from 'react';

export interface LanTurntableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurntableSolid(props: LanTurntableSolidProps): React.ReactElement;
export default LanTurntableSolid;
