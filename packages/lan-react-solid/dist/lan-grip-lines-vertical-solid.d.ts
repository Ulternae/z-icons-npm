import React from 'react';

export interface LanGripLinesVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesVerticalSolid(props: LanGripLinesVerticalSolidProps): React.ReactElement;
export default LanGripLinesVerticalSolid;
