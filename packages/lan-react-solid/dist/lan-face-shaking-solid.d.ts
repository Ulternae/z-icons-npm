import React from 'react';

export interface LanFaceShakingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShakingSolid(props: LanFaceShakingSolidProps): React.ReactElement;
export default LanFaceShakingSolid;
