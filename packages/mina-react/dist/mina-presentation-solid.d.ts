import React from 'react';

export interface MinaPresentationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPresentationSolid(props: MinaPresentationSolidProps): React.ReactElement;
export default MinaPresentationSolid;
