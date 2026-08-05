import React from 'react';

export interface MinaLetterFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFSolid(props: MinaLetterFSolidProps): React.ReactElement;
export default MinaLetterFSolid;
