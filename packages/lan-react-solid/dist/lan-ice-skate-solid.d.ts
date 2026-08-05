import React from 'react';

export interface LanIceSkateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceSkateSolid(props: LanIceSkateSolidProps): React.ReactElement;
export default LanIceSkateSolid;
