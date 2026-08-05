import React from 'react';

export interface LanPlayFlipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayFlipSolid(props: LanPlayFlipSolidProps): React.ReactElement;
export default LanPlayFlipSolid;
