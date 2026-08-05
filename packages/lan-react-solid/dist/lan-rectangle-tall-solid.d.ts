import React from 'react';

export interface LanRectangleTallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTallSolid(props: LanRectangleTallSolidProps): React.ReactElement;
export default LanRectangleTallSolid;
