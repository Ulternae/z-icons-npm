import React from 'react';

export interface MinaLetterOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOSolid(props: MinaLetterOSolidProps): React.ReactElement;
export default MinaLetterOSolid;
