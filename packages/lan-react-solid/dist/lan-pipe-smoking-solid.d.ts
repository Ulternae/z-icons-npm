import React from 'react';

export interface LanPipeSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSmokingSolid(props: LanPipeSmokingSolidProps): React.ReactElement;
export default LanPipeSmokingSolid;
