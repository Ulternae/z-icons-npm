import React from 'react';

export interface MinaRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRowsSolid(props: MinaRowsSolidProps): React.ReactElement;
export default MinaRowsSolid;
