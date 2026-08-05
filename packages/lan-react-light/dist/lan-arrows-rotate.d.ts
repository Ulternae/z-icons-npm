import React from 'react';

export interface LanArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsRotate(props: LanArrowsRotateProps): React.ReactElement;
export default LanArrowsRotate;
