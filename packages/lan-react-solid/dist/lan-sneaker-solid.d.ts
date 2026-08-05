import React from 'react';

export interface LanSneakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerSolid(props: LanSneakerSolidProps): React.ReactElement;
export default LanSneakerSolid;
