import React from 'react';

export interface LanSdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardSolid(props: LanSdCardSolidProps): React.ReactElement;
export default LanSdCardSolid;
