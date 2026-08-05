import React from 'react';

export interface MinaLetterAOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAOctagonSolid(props: MinaLetterAOctagonSolidProps): React.ReactElement;
export default MinaLetterAOctagonSolid;
