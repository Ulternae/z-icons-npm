import React from 'react';

export interface LanCandyCornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCorn(props: LanCandyCornProps): React.ReactElement;
export default LanCandyCorn;
