import React from 'react';

export interface LanRectangleLandscapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleLandscapeSolid(props: LanRectangleLandscapeSolidProps): React.ReactElement;
export default LanRectangleLandscapeSolid;
