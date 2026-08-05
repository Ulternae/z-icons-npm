import React from 'react';

export interface LanGroupArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGroupArrowsRotate(props: LanGroupArrowsRotateProps): React.ReactElement;
export default LanGroupArrowsRotate;
