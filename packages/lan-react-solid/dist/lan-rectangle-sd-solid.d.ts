import React from 'react';

export interface LanRectangleSdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleSdSolid(props: LanRectangleSdSolidProps): React.ReactElement;
export default LanRectangleSdSolid;
