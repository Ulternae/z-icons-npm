import React from 'react';

export interface LanImageLandscapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageLandscapeSolid(props: LanImageLandscapeSolidProps): React.ReactElement;
export default LanImageLandscapeSolid;
