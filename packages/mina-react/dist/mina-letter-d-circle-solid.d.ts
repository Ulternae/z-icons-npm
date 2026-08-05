import React from 'react';

export interface MinaLetterDCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDCircleSolid(props: MinaLetterDCircleSolidProps): React.ReactElement;
export default MinaLetterDCircleSolid;
