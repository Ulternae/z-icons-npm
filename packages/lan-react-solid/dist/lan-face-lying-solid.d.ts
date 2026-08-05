import React from 'react';

export interface LanFaceLyingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLyingSolid(props: LanFaceLyingSolidProps): React.ReactElement;
export default LanFaceLyingSolid;
