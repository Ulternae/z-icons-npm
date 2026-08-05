import React from 'react';

export interface LanFaceGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGlassesSolid(props: LanFaceGlassesSolidProps): React.ReactElement;
export default LanFaceGlassesSolid;
