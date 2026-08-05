import React from 'react';

export interface LanFaceIciclesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceIciclesSolid(props: LanFaceIciclesSolidProps): React.ReactElement;
export default LanFaceIciclesSolid;
