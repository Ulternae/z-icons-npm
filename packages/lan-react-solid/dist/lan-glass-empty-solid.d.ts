import React from 'react';

export interface LanGlassEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassEmptySolid(props: LanGlassEmptySolidProps): React.ReactElement;
export default LanGlassEmptySolid;
