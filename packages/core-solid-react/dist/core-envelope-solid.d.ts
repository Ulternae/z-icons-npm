import React from 'react';

export interface CoreEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEnvelopeSolid(props: CoreEnvelopeSolidProps): React.ReactElement;
export default CoreEnvelopeSolid;
