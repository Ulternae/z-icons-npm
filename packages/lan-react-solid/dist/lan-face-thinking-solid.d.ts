import React from 'react';

export interface LanFaceThinkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceThinkingSolid(props: LanFaceThinkingSolidProps): React.ReactElement;
export default LanFaceThinkingSolid;
