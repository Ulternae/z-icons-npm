import React from 'react';

export interface LanHatSantaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatSantaSolid(props: LanHatSantaSolidProps): React.ReactElement;
export default LanHatSantaSolid;
