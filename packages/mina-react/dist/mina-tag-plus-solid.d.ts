import React from 'react';

export interface MinaTagPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTagPlusSolid(props: MinaTagPlusSolidProps): React.ReactElement;
export default MinaTagPlusSolid;
