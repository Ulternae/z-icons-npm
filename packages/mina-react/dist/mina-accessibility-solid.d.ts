import React from 'react';

export interface MinaAccessibilitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAccessibilitySolid(props: MinaAccessibilitySolidProps): React.ReactElement;
export default MinaAccessibilitySolid;
