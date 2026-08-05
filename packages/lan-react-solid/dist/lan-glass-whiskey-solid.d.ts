import React from 'react';

export interface LanGlassWhiskeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWhiskeySolid(props: LanGlassWhiskeySolidProps): React.ReactElement;
export default LanGlassWhiskeySolid;
