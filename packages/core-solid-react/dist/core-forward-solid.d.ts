import React from 'react';

export interface CoreForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreForwardSolid(props: CoreForwardSolidProps): React.ReactElement;
export default CoreForwardSolid;
