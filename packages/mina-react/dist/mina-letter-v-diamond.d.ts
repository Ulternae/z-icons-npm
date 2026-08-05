import React from 'react';

export interface MinaLetterVDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVDiamond(props: MinaLetterVDiamondProps): React.ReactElement;
export default MinaLetterVDiamond;
