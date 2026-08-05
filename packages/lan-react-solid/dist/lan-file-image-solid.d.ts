import React from 'react';

export interface LanFileImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileImageSolid(props: LanFileImageSolidProps): React.ReactElement;
export default LanFileImageSolid;
