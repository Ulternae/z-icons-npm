import React from 'react';

export interface LanTableColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableColumnsSolid(props: LanTableColumnsSolidProps): React.ReactElement;
export default LanTableColumnsSolid;
