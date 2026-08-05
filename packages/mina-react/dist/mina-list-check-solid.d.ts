import React from 'react';

export interface MinaListCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaListCheckSolid(props: MinaListCheckSolidProps): React.ReactElement;
export default MinaListCheckSolid;
