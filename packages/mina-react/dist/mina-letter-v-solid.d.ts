import React from 'react';

export interface MinaLetterVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVSolid(props: MinaLetterVSolidProps): React.ReactElement;
export default MinaLetterVSolid;
