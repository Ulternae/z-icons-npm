import React from 'react';

export interface LanGripLinesVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesVertical(props: LanGripLinesVerticalProps): React.ReactElement;
export default LanGripLinesVertical;
