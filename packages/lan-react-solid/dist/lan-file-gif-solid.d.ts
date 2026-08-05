import React from 'react';

export interface LanFileGifSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileGifSolid(props: LanFileGifSolidProps): React.ReactElement;
export default LanFileGifSolid;
