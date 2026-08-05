import React from 'react';

export interface LanRectanglePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglePlusSolid(props: LanRectanglePlusSolidProps): React.ReactElement;
export default LanRectanglePlusSolid;
