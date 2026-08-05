import React from 'react';

export interface LanFileXlsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileXlsSolid(props: LanFileXlsSolidProps): React.ReactElement;
export default LanFileXlsSolid;
