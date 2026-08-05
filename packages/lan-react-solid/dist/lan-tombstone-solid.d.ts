import React from 'react';

export interface LanTombstoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneSolid(props: LanTombstoneSolidProps): React.ReactElement;
export default LanTombstoneSolid;
