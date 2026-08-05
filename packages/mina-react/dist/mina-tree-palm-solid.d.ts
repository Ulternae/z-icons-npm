import React from 'react';

export interface MinaTreePalmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreePalmSolid(props: MinaTreePalmSolidProps): React.ReactElement;
export default MinaTreePalmSolid;
