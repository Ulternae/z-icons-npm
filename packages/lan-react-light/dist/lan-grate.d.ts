import React from 'react';

export interface LanGrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrate(props: LanGrateProps): React.ReactElement;
export default LanGrate;
