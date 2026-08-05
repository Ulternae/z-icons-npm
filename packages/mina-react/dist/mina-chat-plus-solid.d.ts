import React from 'react';

export interface MinaChatPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChatPlusSolid(props: MinaChatPlusSolidProps): React.ReactElement;
export default MinaChatPlusSolid;
