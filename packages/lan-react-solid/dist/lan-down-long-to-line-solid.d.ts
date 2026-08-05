import React from 'react';

export interface LanDownLongToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLongToLineSolid(props: LanDownLongToLineSolidProps): React.ReactElement;
export default LanDownLongToLineSolid;
