import React from 'react';

export interface LanTableRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsSolid(props: LanTableRowsSolidProps): React.ReactElement;
export default LanTableRowsSolid;
