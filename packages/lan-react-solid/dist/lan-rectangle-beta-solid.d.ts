import React from 'react';

export interface LanRectangleBetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleBetaSolid(props: LanRectangleBetaSolidProps): React.ReactElement;
export default LanRectangleBetaSolid;
