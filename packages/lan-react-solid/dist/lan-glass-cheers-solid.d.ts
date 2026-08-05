import React from 'react';

export interface LanGlassCheersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCheersSolid(props: LanGlassCheersSolidProps): React.ReactElement;
export default LanGlassCheersSolid;
