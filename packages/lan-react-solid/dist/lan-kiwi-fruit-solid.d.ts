import React from 'react';

export interface LanKiwiFruitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiFruitSolid(props: LanKiwiFruitSolidProps): React.ReactElement;
export default LanKiwiFruitSolid;
