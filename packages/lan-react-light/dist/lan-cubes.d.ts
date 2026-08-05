import React from 'react';

export interface LanCubesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubes(props: LanCubesProps): React.ReactElement;
export default LanCubes;
