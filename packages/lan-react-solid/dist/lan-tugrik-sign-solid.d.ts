import React from 'react';

export interface LanTugrikSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTugrikSignSolid(props: LanTugrikSignSolidProps): React.ReactElement;
export default LanTugrikSignSolid;
