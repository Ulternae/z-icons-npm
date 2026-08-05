import React from 'react';

export interface MinaSignalCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalCircleSolid(props: MinaSignalCircleSolidProps): React.ReactElement;
export default MinaSignalCircleSolid;
