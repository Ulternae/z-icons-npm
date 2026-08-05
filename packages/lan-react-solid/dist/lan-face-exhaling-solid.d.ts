import React from 'react';

export interface LanFaceExhalingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExhalingSolid(props: LanFaceExhalingSolidProps): React.ReactElement;
export default LanFaceExhalingSolid;
