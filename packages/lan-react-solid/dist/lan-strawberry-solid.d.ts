import React from 'react';

export interface LanStrawberrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStrawberrySolid(props: LanStrawberrySolidProps): React.ReactElement;
export default LanStrawberrySolid;
