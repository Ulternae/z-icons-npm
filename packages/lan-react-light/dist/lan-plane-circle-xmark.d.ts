import React from 'react';

export interface LanPlaneCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneCircleXmark(props: LanPlaneCircleXmarkProps): React.ReactElement;
export default LanPlaneCircleXmark;
