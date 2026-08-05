import React from 'react';

export interface LanPillsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPillsSolid(props: LanPillsSolidProps): React.ReactElement;
export default LanPillsSolid;
