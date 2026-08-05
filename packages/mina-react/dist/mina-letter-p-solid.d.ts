import React from 'react';

export interface MinaLetterPSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPSolid(props: MinaLetterPSolidProps): React.ReactElement;
export default MinaLetterPSolid;
