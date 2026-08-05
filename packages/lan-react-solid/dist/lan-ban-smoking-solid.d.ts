import React from 'react';

export interface LanBanSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanSmokingSolid(props: LanBanSmokingSolidProps): React.ReactElement;
export default LanBanSmokingSolid;
