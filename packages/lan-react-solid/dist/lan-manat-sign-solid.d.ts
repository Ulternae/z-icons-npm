import React from 'react';

export interface LanManatSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManatSignSolid(props: LanManatSignSolidProps): React.ReactElement;
export default LanManatSignSolid;
