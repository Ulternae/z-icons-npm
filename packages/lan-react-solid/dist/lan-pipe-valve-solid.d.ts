import React from 'react';

export interface LanPipeValveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeValveSolid(props: LanPipeValveSolidProps): React.ReactElement;
export default LanPipeValveSolid;
