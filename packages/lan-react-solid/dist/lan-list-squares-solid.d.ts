import React from 'react';

export interface LanListSquaresSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListSquaresSolid(props: LanListSquaresSolidProps): React.ReactElement;
export default LanListSquaresSolid;
