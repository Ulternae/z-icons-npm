import React from 'react';

export interface MinaChatMessagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatMessagesSolid(props: MinaChatMessagesSolidProps): React.ReactElement;
export default MinaChatMessagesSolid;
