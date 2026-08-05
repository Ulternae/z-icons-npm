import React from 'react';

export interface LanPaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlane(props: LanPaperPlaneProps): React.ReactElement;
export default LanPaperPlane;
