import React from 'react';

export interface LanGlobeWwwSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWwwSolid(props: LanGlobeWwwSolidProps): React.ReactElement;
export default LanGlobeWwwSolid;
