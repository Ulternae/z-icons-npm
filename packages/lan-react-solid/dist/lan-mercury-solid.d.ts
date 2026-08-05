import React from 'react';

export interface LanMercurySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMercurySolid(props: LanMercurySolidProps): React.ReactElement;
export default LanMercurySolid;
