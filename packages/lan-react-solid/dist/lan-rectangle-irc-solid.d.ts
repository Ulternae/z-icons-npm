import React from 'react';

export interface LanRectangleIrcSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleIrcSolid(props: LanRectangleIrcSolidProps): React.ReactElement;
export default LanRectangleIrcSolid;
