import React from 'react';

export interface MinaLetterDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDSolid(props: MinaLetterDSolidProps): React.ReactElement;
export default MinaLetterDSolid;
