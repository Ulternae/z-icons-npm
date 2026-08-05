import React from 'react';

export interface MinaChatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatSolid(props: MinaChatSolidProps): React.ReactElement;
export default MinaChatSolid;
