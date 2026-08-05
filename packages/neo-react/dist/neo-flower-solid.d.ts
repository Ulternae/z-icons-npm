import React from 'react';

export interface NeoFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFlowerSolid(props: NeoFlowerSolidProps): React.ReactElement;
export default NeoFlowerSolid;
