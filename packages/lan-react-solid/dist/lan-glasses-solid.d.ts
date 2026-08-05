import React from 'react';

export interface LanGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassesSolid(props: LanGlassesSolidProps): React.ReactElement;
export default LanGlassesSolid;
