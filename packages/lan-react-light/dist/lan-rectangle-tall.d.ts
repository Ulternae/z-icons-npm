import React from 'react';

export interface LanRectangleTallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTall(props: LanRectangleTallProps): React.ReactElement;
export default LanRectangleTall;
