import React from 'react';

export interface LanSaxHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxHotSolid(props: LanSaxHotSolidProps): React.ReactElement;
export default LanSaxHotSolid;
