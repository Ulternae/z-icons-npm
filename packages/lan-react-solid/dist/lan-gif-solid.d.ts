import React from 'react';

export interface LanGifSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGifSolid(props: LanGifSolidProps): React.ReactElement;
export default LanGifSolid;
