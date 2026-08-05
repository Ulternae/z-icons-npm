import React from 'react';

export interface LanBarProgressEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressEmptySolid(props: LanBarProgressEmptySolidProps): React.ReactElement;
export default LanBarProgressEmptySolid;
