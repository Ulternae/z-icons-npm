import React from 'react';

export interface LanRectangleTallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTallThin(props: LanRectangleTallThinProps): React.ReactElement;
export default LanRectangleTallThin;
