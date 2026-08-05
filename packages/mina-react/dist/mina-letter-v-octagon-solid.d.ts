import React from 'react';

export interface MinaLetterVOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVOctagonSolid(props: MinaLetterVOctagonSolidProps): React.ReactElement;
export default MinaLetterVOctagonSolid;
