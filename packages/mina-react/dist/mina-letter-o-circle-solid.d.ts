import React from 'react';

export interface MinaLetterOCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOCircleSolid(props: MinaLetterOCircleSolidProps): React.ReactElement;
export default MinaLetterOCircleSolid;
