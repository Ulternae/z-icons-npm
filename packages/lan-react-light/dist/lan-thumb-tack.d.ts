import React from 'react';

export interface LanThumbTackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTack(props: LanThumbTackProps): React.ReactElement;
export default LanThumbTack;
