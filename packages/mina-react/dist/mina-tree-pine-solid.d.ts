import React from 'react';

export interface MinaTreePineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreePineSolid(props: MinaTreePineSolidProps): React.ReactElement;
export default MinaTreePineSolid;
