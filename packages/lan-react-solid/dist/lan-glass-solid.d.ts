import React from 'react';

export interface LanGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassSolid(props: LanGlassSolidProps): React.ReactElement;
export default LanGlassSolid;
