import React from 'react';

export interface LanTurkeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurkeySolid(props: LanTurkeySolidProps): React.ReactElement;
export default LanTurkeySolid;
