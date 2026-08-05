import React from 'react';

export interface LanButterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterSolid(props: LanButterSolidProps): React.ReactElement;
export default LanButterSolid;
