import React from 'react';

export interface LanPaperPlaneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperPlaneAltSolid(props: LanPaperPlaneAltSolidProps): React.ReactElement;
export default LanPaperPlaneAltSolid;
