import React from 'react';

export interface LanGripLinesVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesVerticalThin(props: LanGripLinesVerticalThinProps): React.ReactElement;
export default LanGripLinesVerticalThin;
