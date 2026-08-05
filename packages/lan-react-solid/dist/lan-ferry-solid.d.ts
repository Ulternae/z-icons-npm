import React from 'react';

export interface LanFerrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerrySolid(props: LanFerrySolidProps): React.ReactElement;
export default LanFerrySolid;
