import React from 'react';

export interface LanPresentationScreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPresentationScreenSolid(props: LanPresentationScreenSolidProps): React.ReactElement;
export default LanPresentationScreenSolid;
