import React from 'react';

export interface MinaTypeUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeUnderlineSolid(props: MinaTypeUnderlineSolidProps): React.ReactElement;
export default MinaTypeUnderlineSolid;
