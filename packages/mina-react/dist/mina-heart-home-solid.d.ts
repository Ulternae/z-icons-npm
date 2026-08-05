import React from 'react';

export interface MinaHeartHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartHomeSolid(props: MinaHeartHomeSolidProps): React.ReactElement;
export default MinaHeartHomeSolid;
