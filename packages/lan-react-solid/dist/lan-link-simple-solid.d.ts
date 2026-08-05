import React from 'react';

export interface LanLinkSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimpleSolid(props: LanLinkSimpleSolidProps): React.ReactElement;
export default LanLinkSimpleSolid;
