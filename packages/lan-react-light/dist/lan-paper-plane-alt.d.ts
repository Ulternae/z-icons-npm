import React from 'react';

export interface LanPaperPlaneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlaneAlt(props: LanPaperPlaneAltProps): React.ReactElement;
export default LanPaperPlaneAlt;
