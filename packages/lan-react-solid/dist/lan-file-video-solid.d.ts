import React from 'react';

export interface LanFileVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVideoSolid(props: LanFileVideoSolidProps): React.ReactElement;
export default LanFileVideoSolid;
