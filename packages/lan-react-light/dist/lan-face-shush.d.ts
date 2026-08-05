import React from 'react';

export interface LanFaceShushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShush(props: LanFaceShushProps): React.ReactElement;
export default LanFaceShush;
