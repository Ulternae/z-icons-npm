import React from 'react';

export interface MinaChatCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatCheckSolid(props: MinaChatCheckSolidProps): React.ReactElement;
export default MinaChatCheckSolid;
