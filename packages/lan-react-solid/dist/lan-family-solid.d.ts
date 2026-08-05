import React from 'react';

export interface LanFamilySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilySolid(props: LanFamilySolidProps): React.ReactElement;
export default LanFamilySolid;
