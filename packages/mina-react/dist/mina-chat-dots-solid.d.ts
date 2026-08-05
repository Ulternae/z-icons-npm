import React from 'react';

export interface MinaChatDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatDotsSolid(props: MinaChatDotsSolidProps): React.ReactElement;
export default MinaChatDotsSolid;
