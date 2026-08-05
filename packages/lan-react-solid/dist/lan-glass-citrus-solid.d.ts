import React from 'react';

export interface LanGlassCitrusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCitrusSolid(props: LanGlassCitrusSolidProps): React.ReactElement;
export default LanGlassCitrusSolid;
