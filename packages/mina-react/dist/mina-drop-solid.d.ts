import React from 'react';

export interface MinaDropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDropSolid(props: MinaDropSolidProps): React.ReactElement;
export default MinaDropSolid;
