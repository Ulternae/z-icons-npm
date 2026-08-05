import React from 'react';

export interface MinaLetterROctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterROctagonSolid(props: MinaLetterROctagonSolidProps): React.ReactElement;
export default MinaLetterROctagonSolid;
