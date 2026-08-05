import React from 'react';

export interface MinaLetterMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMSolid(props: MinaLetterMSolidProps): React.ReactElement;
export default MinaLetterMSolid;
