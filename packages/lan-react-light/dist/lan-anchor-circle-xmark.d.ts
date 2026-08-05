import React from 'react';

export interface LanAnchorCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorCircleXmark(props: LanAnchorCircleXmarkProps): React.ReactElement;
export default LanAnchorCircleXmark;
