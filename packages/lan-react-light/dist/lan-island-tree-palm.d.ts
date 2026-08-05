import React from 'react';

export interface LanIslandTreePalmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIslandTreePalm(props: LanIslandTreePalmProps): React.ReactElement;
export default LanIslandTreePalm;
